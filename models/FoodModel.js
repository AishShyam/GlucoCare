import mongoose from 'mongoose'
import { MEAL_TAG_FOOD } from '../utils/constants.js'

const FoodSchema = new mongoose.Schema({
    carbs: Number,
    fats: Number,
    proteins: Number,
    calories: Number,
    meal: {
        type:String,
        enum:Object.values(MEAL_TAG_FOOD),
        default: 'lunch'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
)

export default mongoose.model('Food', FoodSchema)