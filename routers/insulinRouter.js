import express from 'express'
const router = express.Router()
import {
    getAllInsulinValue,
    createInsulinValue,
    getInsulinValue,
    updateInsulinValue,
    deleteInsulinValue,
    getLatestInsulinValue
} from '../controllers/insulinController.js'
import { validateInsulinInput, validateInsulinIdParam } from '../middleware/validationMiddleware.js'

router.get('/', getAllInsulinValue)
router.get('/latest', getLatestInsulinValue)
router.post('/', validateInsulinInput, createInsulinValue)
router.get('/:id', validateInsulinIdParam, getInsulinValue)
router.patch('/:id', validateInsulinInput, validateInsulinIdParam, updateInsulinValue)
router.delete('/:id', validateInsulinIdParam, deleteInsulinValue)

export default router