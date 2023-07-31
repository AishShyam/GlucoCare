import express from 'express'
const router = express.Router()
import {
    getAllLabValue,
    createLabValue,
    getLabValue,
    updateLabValue,
    deleteLabValue,
    getLatestLabValue
} from '../controllers/labController.js'
import { validateLabIdParam, validateLabInput } from '../middleware/validationMiddleware.js'
import { getLatestMedicineValue } from '../controllers/medicineController.js'

router.get('/', getAllLabValue)
router.get('/latest', getLatestLabValue)
router.post('/', validateLabInput, createLabValue)
router.get('/:id', validateLabIdParam, getLabValue)
router.patch('/:id', validateLabInput, validateLabIdParam, updateLabValue)
router.delete('/:id', validateLabIdParam, deleteLabValue)

export default router