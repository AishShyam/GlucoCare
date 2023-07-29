import express from 'express'
const router = express.Router()
import {
    getAllNotesValue,
    createNotesValue,
    getNotesValue,
    updateNotesValue,
    deleteNotesValue
} from '../controllers/notesController.js'
import { validateNotesIdParam, validateNotesInput } from '../middleware/validationMiddleware.js'

router.get('/', getAllNotesValue)
router.post('/', validateNotesInput, createNotesValue)
router.get('/:id', validateNotesIdParam, getNotesValue)
router.patch('/:id', validateNotesInput, validateNotesIdParam, updateNotesValue)
router.delete('/:id', validateNotesIdParam, deleteNotesValue)

export default router