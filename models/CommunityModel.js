import mongoose from 'mongoose'

const CommunitySchema = new mongoose.Schema({
    name:String,
    message:String,
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    },
    { timestamps: true }
)

export default mongoose.model('Community', CommunitySchema)