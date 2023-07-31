import express from 'express'
const router = express.Router()
import {
    getAllFoodValue,
    createFoodValue,
    getFoodValue,
    updateFoodValue,
    deleteFoodValue,
    getLatestFoodValue
} from '../controllers/foodController.js'
import {validateFoodInput, validateFoodIdParam} from '../middleware/validationMiddleware.js'

router.get('/', getAllFoodValue)
router.get('/latest', getLatestFoodValue)
router.post('/', validateFoodInput, createFoodValue)
router.get('/:id', validateFoodIdParam, getFoodValue)
router.patch('/:id', validateFoodInput, validateFoodIdParam, updateFoodValue)
router.delete('/:id', validateFoodIdParam, deleteFoodValue)

export default router