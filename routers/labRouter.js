import express from 'express'
const router = express.Router()
import {
    getAllLabValue,
    createLabValue,
    getLabValue,
    updateLabValue,
    deleteLabValue
} from '../controllers/labController.js'
import { validateLabIdParam, validateLabInput } from '../middleware/validationMiddleware.js'

router.get('/', getAllLabValue)
router.post('/', validateLabInput, createLabValue)
router.get('/:id', validateLabIdParam, getLabValue)
router.patch('/:id', validateLabInput, validateLabIdParam, updateLabValue)
router.delete('/:id', validateLabIdParam, deleteLabValue)

export default router