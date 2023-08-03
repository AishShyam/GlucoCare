import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
    date: Date,
    appointmentTitle: String,
    location: String,
    appointmentType: {
        type: String,
        enum: ["Doctor's Appointment", "Diabetes Education Class", "Lab Tests", "Other"],
        default: "Doctor's Appointment" 
    },
    note:String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true 
})

export default mongoose.model('Schedule', ScheduleSchema)