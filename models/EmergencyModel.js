import mongoose from 'mongoose'

const EmergencySchema = new mongoose.Schema({
    name: String,
    dob: Date,
    bloodType: {
        type:String,
        enum:["A+","B+","O+","AB+","A-","B-","O-","AB-"],
        default:"A+"
    },
    allergies: String,
    currentMedication: String,
    medicalConditions:String,
    contact: String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
)

export default mongoose.model('Emergency', EmergencySchema)