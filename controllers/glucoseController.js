import Glucose from '../models/GlucoseModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllGlucoseValue = async (req, res) => {
    const glucoseData = await Glucose.find({createdBy: req.user.userId})
    res.status(200).json({ glucoseData })
}

export const getLatestGlucoseValue = async (req, res) => {
    const glucoseData = await Glucose.find({createdBy: req.user.userId}).sort({ createdAt: -1 }).limit(1)
    res.status(200).json({ glucoseData })
}

export const createGlucoseValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const glucoseValue = await Glucose.create(req.body)
    res.status(200).json({ glucoseValue })
}

export const getGlucoseValue = async (req, res) => {
    const {id} = req.params
    const glucoseValue = await Glucose.findById(id)
    if (!glucoseValue) throw new NotFoundError(`no glucose value with that id`)
    res.status(200).json({ glucoseValue })
}

export const updateGlucoseValue = async (req,res) => {
    const {id} = req.params
    const glucoseValue = await Glucose.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!glucoseValue) throw new NotFoundError(`no glucose value with that id`)
    res.status(200).json({ msg: 'glucose level modified', glucoseValue })
}

export const deleteGlucoseValue = async (req,res) => {
    const {id} = req.params
    const glucoseValue = await Glucose.findByIdAndDelete(id)
    if (!glucoseValue) throw new NotFoundError(`no glucose value with that id`)
    res.status(200).json({ msg: 'glucose level deleted' })
}

