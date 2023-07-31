import Emergency from "../models/EmergencyModel.js"
import { NotFoundError } from '../errors/customErrors.js'

export const getAllEmergencyValue = async (req, res) => {
    // const emergencyData = await Emergency.find({createdBy: req.user.userId})
    const emergencyData = await Emergency.findOne({createdBy: req.user.userId}).sort({ _id: -1 }).limit(1);
    res.status(200).json({ emergencyData })
}

export const createEmergencyValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const emergencyValue = await Emergency.create(req.body)
    res.status(200).json({ emergencyValue })
}

export const getEmergencyValue = async (req, res) => {
    const {id} = req.params
    const emergencyValue = await Emergency.findById(id)
    if (!emergencyValue) throw new NotFoundError(`no emergency value with that id`)
    res.status(200).json({ emergencyValue })
}

export const updateEmergencyValue = async (req,res) => {
    const {id} = req.params
    const emergencyValue = await Emergency.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!emergencyValue) throw new NotFoundError(`no emergency value with that id`)
    res.status(200).json({ msg: 'emergency modified', emergencyValue })
}

export const deleteEmergencyValue = async (req,res) => {
    const {id} = req.params
    const emergencyValue = await Emergency.findByIdAndDelete(id)
    if (!emergencyValue) throw new NotFoundError(`no emergency value with that id`)
    res.status(200).json({ msg: 'emergency value deleted' })
}

