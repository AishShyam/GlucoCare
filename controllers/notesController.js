import Notes from '../models/NotesModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllNotesValue = async (req, res) => {
    const notesData = await Notes.find({createdBy: req.user.userId})
    res.status(200).json({ notesData })
}

export const createNotesValue = async (req,res) => {
    req.body.createdBy = req.user.userId
    const notesValue = await Notes.create(req.body)
    res.status(200).json({ notesValue })
}

export const getNotesValue = async (req, res) => {
    const {id} = req.params
    const notesValue = await Notes.findById(id)
    if (!notesValue) throw new NotFoundError(`no notes value with that id`)
    res.status(200).json({ notesValue })
}

export const updateNotesValue = async (req,res) => {
    const {id} = req.params
    const notesValue = await Notes.findByIdAndUpdate(id, req.body, {
        new:true
    })
    if(!notesValue) throw new NotFoundError(`no note value with that id`)
    res.status(200).json({ msg: 'note modified', notesValue })
}

export const deleteNotesValue = async (req,res) => {
    const {id} = req.params
    const notesValue = await Notes.findByIdAndDelete(id)
    if (!notesValue) throw new NotFoundError(`no note value with that id`)
    res.status(200).json({ msg: 'note value deleted' })
}