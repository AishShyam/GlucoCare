import Exercise from '../models/ExerciseModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllExerciseValue = async (req, res) => {
    const exerciseData = await Exercise.find({createdBy: req.user.userId})
    res.status(200).json({ exerciseData })
}

export const createExerciseValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const exerciseValue = await Exercise.create(req.body)
    res.status(200).json({ exerciseValue })
}

export const getExerciseValue = async (req, res) => {
    const {id} = req.params
    const exerciseValue = await Exercise.findById(id)
    if (!exerciseValue) throw new NotFoundError(`no exercise value with that id`)
    res.status(200).json({ exerciseValue })
}

export const updateExerciseValue = async (req,res) => {
    const {id} = req.params
    const exerciseValue = await Exercise.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!exerciseValue) throw new NotFoundError(`no exercise value with that id`)
    res.status(200).json({ msg: 'exercise modified', exerciseValue })
}

export const deleteExerciseValue = async (req,res) => {
    const {id} = req.params
    const exerciseValue = await Exercise.findByIdAndDelete(id)
    if (!exerciseValue) throw new NotFoundError(`no exercise value with that id`)
    res.status(200).json({ msg: 'exercise value deleted' })
}
