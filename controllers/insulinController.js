import Insulin from '../models/InsulinModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllInsulinValue = async (req, res) => {
    const insulinData = await Insulin.find({createdBy: req.user.userId})
    res.status(200).json({ insulinData })
}

export const getLatestInsulinValue = async (req, res) => {
    const insulinData = await Insulin.find({createdBy: req.user.userId}).sort({ createdAt: -1 }).limit(1)
    res.status(200).json({ insulinData })
}

export const createInsulinValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const insulinValue = await Insulin.create(req.body)
    res.status(200).json({ insulinValue })
}

export const getInsulinValue = async (req, res) => {
    const {id} = req.params
    const insulinValue = await Insulin.findById(id)
    if (!insulinValue) throw new NotFoundError(`no insulin value with that id`)
    res.status(200).json({ insulinValue })
}

export const updateInsulinValue = async (req,res) => {
    const {id} = req.params
    const insulinValue = await Insulin.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!insulinValue) throw new NotFoundError(`no insulin value with that id`)
    res.status(200).json({ msg: 'insulin data modified', insulinValue })
}

export const deleteInsulinValue = async (req,res) => {
    const {id} = req.params
    const insulinValue = await Insulin.findByIdAndDelete(id)
    if (!insulinValue) throw new NotFoundError(`no insulin value with that id`)
    res.status(200).json({ msg: 'insulin deleted' })
}