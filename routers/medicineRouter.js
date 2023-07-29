import express from 'express'
const router = express.Router()
import {
    getAllMedicineValue,
    createMedicineValue,
    getMedicineValue,
    updateMedicineValue,
    deleteMedicineValue
} from '../controllers/medicineController.js'
import { validateMedicineInput, validateMedicineIdParam } from '../middleware/validationMiddleware.js'

router.get('/', getAllMedicineValue)
router.post('/', validateMedicineInput, createMedicineValue)
router.get('/:id', validateMedicineIdParam, getMedicineValue)
router.patch('/:id', validateMedicineInput, validateMedicineIdParam, updateMedicineValue)
router.delete('/:id', validateMedicineIdParam, deleteMedicineValue)

export default router