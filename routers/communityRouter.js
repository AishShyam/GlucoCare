import express from 'express'
const router = express.Router()
import {
    getAllCommunityValue,
    createCommunityValue,
    getCommunityValue,
} from '../controllers/communityController.js'
import { validateCommunityInput, validateCommunityIdParam } from '../middleware/validationMiddleware.js'

router.get('/', getAllCommunityValue)
router.post('/', validateCommunityInput, createCommunityValue)
router.get('/:id', validateCommunityIdParam, getCommunityValue)

export default router