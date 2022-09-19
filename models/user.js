const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    email_verified: {
        type: Boolean,
    },
    userId: {
        type: String,
        required: true
    },
    image_URL: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    access_time: {
        type: String,
        required: true
    }
},
{timestamps:true}
)

module.exports=mongoose.model('users',UserSchema)