import express from 'express'
const router = express.Router()
import {
    getAllScheduleValue,
    createScheduleValue,
    getScheduleValue,
    updateScheduleValue,
    deleteScheduleValue,
    getLatestScheduleValue
} from '../controllers/scheduleController.js'
import { validateScheduleIdParam } from '../middleware/validationMiddleware.js'

router.get('/', getAllScheduleValue)
router.get('/latest', getLatestScheduleValue)
router.post('/', createScheduleValue)
router.get('/:id', validateScheduleIdParam, getScheduleValue)
router.patch('/:id', validateScheduleIdParam, updateScheduleValue)
router.delete('/:id', validateScheduleIdParam, deleteScheduleValue)

export default router

