const mongoose = require('mongoose')

const ArtistSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    twitter:{
        type:String,
        required:false
    },
    instagram:{
        type:String,
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('artist', ArtistSchema)