import Food from '../models/FoodModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllFoodValue = async (req, res) => {
    const foodData = await Food.find({createdBy: req.user.userId})
    res.status(200).json({ foodData })
}

export const createFoodValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const foodValue = await Food.create(req.body)
    res.status(200).json({ foodValue })
}

export const getFoodValue = async (req, res) => {
    const {id} = req.params
    const foodValue = await Food.findById(id)
    if (!foodValue) throw new NotFoundError(`no food value with that id`)
    res.status(200).json({ foodValue })
}

export const updateFoodValue = async (req,res) => {
    const {id} = req.params
    const foodValue = await Food.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!foodValue) throw new NotFoundError(`no food value with that id`)
    res.status(200).json({ msg: 'food modified', foodValue })
}

export const deleteFoodValue = async (req,res) => {
    const {id} = req.params
    const foodValue = await Food.findByIdAndDelete(id)
    if (!foodValue) throw new NotFoundError(`no food value with that id`)
    res.status(200).json({ msg: 'food value deleted' })
}