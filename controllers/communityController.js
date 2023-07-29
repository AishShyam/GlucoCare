import Community from '../models/CommunityModel.js'
import { NotFoundError } from '../errors/customErrors.js'
import { getCurrentUser } from './userController.js'
import User from '../models/UserModel.js'

export const getAllCommunityValue = async (req, res) => {
    const communityData = await Community.find({})
    res.status(200).json({ communityData })
}

export const createCommunityValue = async (req,res) => {
    // req.body.createdBy = req.user.userId
    // // req.body.name = req.user.name
    // const communityValue = await Community.create(req.body)
    // res.status(200).json({ communityValue })
    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
        return res.status(404).json({ error: 'User not found' });
        }
        const communityValueData = {
            name: user.name,
            createdBy: req.user.userId,
            message: req.body.message
          };
        const communityValue = await Community.create(communityValueData);
        res.status(200).json({ communityValue });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });

        
    }
}

export const getCommunityValue =  async (req, res) => {
    const {id} = req.params
    const communityValue = await Community.findById(id)
    if (!communityValue) throw new NotFoundError(`no message with that id`)
    res.status(200).json({ communityValue })
}

