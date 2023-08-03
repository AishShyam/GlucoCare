import mongoose from 'mongoose';
import { INSULIN_TYPE } from '../utils/constants.js';

const InsulinSchema = new mongoose.Schema({
    insulinType: {
        type: String,
        enum: Object.values(INSULIN_TYPE),
        default: 'Rapid-Acting Insulin'
    },
    insulinDosage: Number,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true 
})

export default mongoose.model('Insulin', InsulinSchema)