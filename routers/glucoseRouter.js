import express from 'express'
const router = express.Router()
import {
    getAllGlucoseValue,
    getLatestGlucoseValue,
    createGlucoseValue,
    getGlucoseValue,
    updateGlucoseValue,
    deleteGlucoseValue    
} from '../controllers/glucoseController.js'
import { validateGlucoseInput, validateIdParam } from '../middleware/validationMiddleware.js'

router.get('/', getAllGlucoseValue)
router.get('/latest', getLatestGlucoseValue)
router.post('/', validateGlucoseInput,createGlucoseValue)
router.get('/:id', validateIdParam, getGlucoseValue)
router.patch('/:id', validateGlucoseInput,validateIdParam, updateGlucoseValue)
router.delete('/:id', validateIdParam, deleteGlucoseValue)

export default router;

