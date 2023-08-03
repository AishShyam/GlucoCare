import Schedule from '../models/ScheduleModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllScheduleValue = async (req, res) => {
    const scheduleData = await Schedule.find({createdBy: req.user.userId})
    res.status(200).json({ scheduleData })
}

export const getLatestScheduleValue = async (req, res) => {
    const scheduleData = await Schedule.find({createdBy: req.user.userId}).sort({ createdAt: -1 }).limit(1)
    res.status(200).json({ scheduleData })
}

export const createScheduleValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const scheduleValue = await Schedule.create(req.body)
    res.status(200).json({ scheduleValue })
}

export const getScheduleValue = async (req, res) => {
    const {id} = req.params
    const scheduleValue = await Schedule.findById(id)
    if (!scheduleValue) throw new NotFoundError(`no schedule value with that id`)
    res.status(200).json({ scheduleValue })
}

export const updateScheduleValue = async (req,res) => {
    const {id} = req.params
    const scheduleValue = await Schedule.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!scheduleValue) throw new NotFoundError(`no schedule value with that id`)
    res.status(200).json({ msg: 'Schedule data modified', scheduleValue })
}

export const deleteScheduleValue = async (req,res) => {
    const {id} = req.params
    const scheduleValue = await Schedule.findByIdAndDelete(id)
    if (!scheduleValue) throw new NotFoundError(`no Schedule value with that id`)
    res.status(200).json({ msg: 'schedule deleted' })
}