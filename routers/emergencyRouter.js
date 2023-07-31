import express from 'express'
const router = express.Router()
import {
    getAllEmergencyValue,
    createEmergencyValue,
    getEmergencyValue,
    updateEmergencyValue,
    deleteEmergencyValue
} from '../controllers/emergencyController.js'
import { validateEmergencyInput, validateEmergencyIdParam } from '../middleware/validationMiddleware.js'


router.get('/', getAllEmergencyValue)
router.post('/', validateEmergencyInput, createEmergencyValue)
router.get('/:id', validateEmergencyIdParam, getEmergencyValue)
router.patch('/:id', validateEmergencyInput, validateEmergencyIdParam, updateEmergencyValue)
router.delete('/:id', validateEmergencyIdParam, deleteEmergencyValue)

export default router