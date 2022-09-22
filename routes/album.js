const express=require('express')
const { CreateAlbum, AlbumDetails, FindAllAlbum, UpdateAlbum, DeleteAlbum } = require('../collection.js/album')
const router=express.Router()

router.post('/save', CreateAlbum)
router.get('/find/:id', AlbumDetails)
router.get('/get-all', FindAllAlbum)
router.put('/update/:id', UpdateAlbum)
router.delete('/delete/:id', DeleteAlbum)


module.exports=router