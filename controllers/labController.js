import Lab from '../models/LabModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllLabValue = async (req, res) => {
    const labData = await Lab.find({createdBy: req.user.userId})
    res.status(200).json({ labData })
}

export const getLatestLabValue = async (req, res) => {
    const labData = await Lab.find({createdBy: req.user.userId}).sort({ createdAt: -1 }).limit(1)
    res.status(200).json({ labData })
}

export const createLabValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const labValue = await Lab.create(req.body)
    res.status(200).json({ labValue })
}

export const getLabValue = async (req, res) => {
    const {id} = req.params
    const labValue = await Lab.findById(id)
    if (!labValue) throw new NotFoundError(`no lab value with that id`)
    res.status(200).json({ labValue })
}

export const updateLabValue = async (req,res) => {
    const {id} = req.params
    const labValue = await Lab.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!labValue) throw new NotFoundError(`no lab value with that id`)
    res.status(200).json({ msg: 'lab modified', labValue })
}

export const deleteLabValue = async (req,res) => {
    const {id} = req.params
    const labValue = await Lab.findByIdAndDelete(id)
    if (!labValue) throw new NotFoundError(`no lab value with that id`)
    res.status(200).json({ msg: 'lab value deleted' })
}
