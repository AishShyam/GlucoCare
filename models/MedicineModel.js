import mongoose from 'mongoose';
import {MEDICINE_UNIT} from '../utils/constants.js';

const MedicineSchema = new mongoose.Schema({
    date: Date,
    medicineName: String,
    dosage:Number,
    medicineUnit:{
        type:String,
        enum:Object.values(MEDICINE_UNIT),
        default:'mg'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
)

export default mongoose.model('Medicine', MedicineSchema);