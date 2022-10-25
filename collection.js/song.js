const SongModel = require('../models/song')

exports.CreateSong = async (req, res) => {
    try {
        const song = await SongModel.create({
            name: req.body.name,
            imageUrl: req.body.image,
            songUrl:req.body.songUrl,
            album:req.body.albumId,
            artist:req.body.artistId,
            language:req.body.language,
            catogery: req.body.catogery
        })

        if (song) return res.status(200).json({
            success: true,
            song
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

exports.SongDetails = async (req, res) => {
    try {
        const song_id = req.params.id

        const details = await SongModel.findById({
            _id: song_id
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

exports.FindAllSong = async (req, res) => {
    try {
        const songs = await SongModel.find({}).sort({
            craetedAt: 1
        })
        if (songs) {
            return res.status(200).json({
                success: true,
                songs
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

exports.UpdateSong = async (req, res) => {
    try {
        const update = await SongModel.findOneAndUpdate({
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
                song: update
            })
        }

    } catch (error) {
        console.log(error);
    }
}

exports.DeleteSong = async (req, res) => {
    try {
        const song_id = req.params.id

        const deleteSong = await AlbumModel.deleteOne({
            _id: song_id
        })

        if (deleteSong) {
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