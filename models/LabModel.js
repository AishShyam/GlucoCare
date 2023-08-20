import mongoose from 'mongoose'
import { LAB_TEST_TYPE, LAB_UNITS } from '../utils/constants.js'

const LabSchema = new mongoose.Schema({
    date: Date,
    testType: {
        type:String,
        enum:Object.values(LAB_TEST_TYPE),
        default:'HbA1c'
    },
    testResult: Number,
    testUnit: {
        type:String,
        enum:Object.values(LAB_UNITS),
        default:'%'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
)

export default mongoose.model('Lab', LabSchema)