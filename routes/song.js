const express = require('express')
const router = express.Router()
const{CreateSong,SongDetails,FindAllSong,UpdateSong,DeleteSong}=require('../collection.js/song')

router.post('/save', CreateSong)
router.get('/find/:id', SongDetails)
router.get('/get-all', FindAllSong)
router.put('/update/:id', UpdateSong)
router.delete('/delete/:id', DeleteSong)

module.exports = router