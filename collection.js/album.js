const AlbumModel = require('../models/album')

exports.CreateAlbum = async (req, res) => {
    try {
        const album = await AlbumModel.create({
            name: req.body.name,
            imageUrl: req.body.image,
        })

        if (album) return res.status(200).json({
            success: true,
            album
        })
        else return res.status(400).json({
            success: false,
            message: "Artist Not Created"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            messsage: error
        })
        console.log(error);
    }
}

exports.AlbumDetails = async (req, res) => {
    try {
        const album_id = req.params.id

        const details = await AlbumModel.findById({
            _id: album_id
        })
        if (details) {
            return res.status(200).json({
                success: true,
                details
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something Wrong"
        })
    }

}

exports.FindAllAlbum = async (req, res) => {
    try {
        const albums = await AlbumModel.find({}).sort({
            craetedAt: 1
        })
        if (albums) {
            return res.status(200).json({
                success: true,
                albums
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something Wrong"
        })
    }
}

exports.UpdateAlbum = async (req, res) => {
    try {
        const update = await AlbumModel.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            imageUrl: req.body.image,
        }, {
            upsert: true,
            new: true
        })

        if (update) {
            return res.status(200).json({
                successs: true,
                album: update
            })
        }

    } catch (error) {
        console.log(error);
    }
}

exports.DeleteAlbum = async (req, res) => {
    try {
        const album_id = req.params.id

        const deleteAlbum = await AlbumModel.deleteOne({
            _id: album_id
        })

        if (deleteAlbum) {
            return res.status(200).json({
                message: "Deleteed SuccesFully"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Somethiing Wrong"
        })
    }
}