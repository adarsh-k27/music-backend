const mongoose = require('mongoose')

const SongSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    songUrl:{
        type:String,
        required:true
    },
    album:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"album",
        required:false
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"artist"
    },
    language:{
        type:String,
        required:false
    },
    catogery:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('song', SongSchema)