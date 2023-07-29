import express from 'express'
const router = express.Router()
import {
    getAllExerciseValue,
    createExerciseValue,
    getExerciseValue,
    updateExerciseValue,
    deleteExerciseValue
} from '../controllers/exerciseController.js'
import { validateExerciseInput, validateExerciseIdParam } from '../middleware/validationMiddleware.js'

router.get('/', getAllExerciseValue)
router.post('/', validateExerciseInput, createExerciseValue)
router.get('/:id', validateExerciseIdParam, getExerciseValue)
router.patch('/:id', validateExerciseInput, validateExerciseIdParam, updateExerciseValue)
router.delete('/:id', validateExerciseIdParam, deleteExerciseValue)

export default router