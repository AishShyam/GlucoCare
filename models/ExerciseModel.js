import mongoose from 'mongoose'
import { EXERCISE_TYPE } from '../utils/constants.js'

const ExerciseSchema = new mongoose.Schema({
    exerciseType: {
        type:String,
        enum:Object.values(EXERCISE_TYPE),
        default: 'walking'
    },
    duration: Number,
    comment: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
)

export default mongoose.model('Exercise', ExerciseSchema)