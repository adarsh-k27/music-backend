const { Router } = require('express')
const express = require('express')
const { CreateArtist, ArtistDetails, FindAllArtist, UpdateArtist, DeleteArtist } = require('../collection.js/artist')
const router = express.Router()


router.post('/save',CreateArtist)
router.get('/find/:id',ArtistDetails)
router.get('/get-all',FindAllArtist)
router.put('/update/:id',UpdateArtist)
router.delete('/delete/:id',DeleteArtist)

module.exports = router