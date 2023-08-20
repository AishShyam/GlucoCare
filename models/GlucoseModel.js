import mongoose from 'mongoose';
import { GLUCOSE_UNIT, MEAL_TAG } from '../utils/constants.js';

const GlucoseSchema = new mongoose.Schema({
    date: Date,
    glucose:Number,
    unit:{
        type:String,
        enum:Object.values(GLUCOSE_UNIT),
        default:'mmol/L'
    },
    mealTag:{
        type:String,
        enum:Object.values(MEAL_TAG),
        default:'breakfast'
    },
    note: {
        type:String,
        default:'none'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
)

export default mongoose.model('Glucose', GlucoseSchema);