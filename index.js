const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const userRoute = require('./routes/user')
const artistRoute=require('./routes/artist')
const albunRoute=require('./routes/album')
const songRoute=require('./routes/song')
const body_parser=require ('body-parser')
const PORT = process.env.PORT || 5000
//Database Connection 
mongoose.connect(process.env.DB_URL)
mongoose.connection
    .once('open', () => console.log("MongoDb Connected SuccesFully"))
    .on('error', (error) => console.log("ERROR:::MonggoseError", error))

app.use(cors())
//user Route setup
app.use(body_parser.json())
app.use('/api/user', userRoute)
app.use('/api/album',albunRoute)
app.use('/api/artist',artistRoute)
app.use('/api/song',songRoute)

app.get('/', (req, res) => {
    res.send("Hello Server  Working Fine ")
})

app.listen(PORT, () => console.log("Listening To port", PORT))