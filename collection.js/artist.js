const ArtistModel = require('../models/artist')

exports.CreateArtist = async (req, res) => {
    try {
        const artist = await ArtistModel.create({
            name: req.body.name,
            imageUrl: req.body.image,
            twitter: req.body.twitter,
            instagram: req.body.instagram
        })

        if (artist) return res.status(200).json({
            success: true,
            artist
        })
        else return res.status(400).json({
            success: false,
            message: "Artist Not Created"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            messsage: err
        })
        console.log(err);
    }
}

exports.ArtistDetails = async (req, res) => {
    try {
        const artist_id = req.params.id

        const details = await ArtistModel.findById({
            _id: artist_id
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

exports.FindAllArtist = async (req, res) => {
    try {
        const artists = await ArtistModel.find({
                sort: {
                    createdAt:1
                }
            })
        if (artists) {
            return res.status(200).json({
                success: true,
                artists
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

exports.UpdateArtist = async (req, res) => {
    try {
        const update = await ArtistModel.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            imageUrl: req.body.image,
            twitter: req.body.twitter,
            instagram: req.body.instagram
        }, {
            upsert: true,
            new: true
        })

        if (update) {
            return res.status(200).json({
                successs: true,
                artist: update
            })
        }

    } catch (error) {
        console.log(error);
    }
}

exports.DeleteArtist = async (req, res) => {
    try {
        const artist_id = req.params.id

        const deleteArtist = await ArtistModel.deleteOne({
            _id: artist_id
        })

        if (deleteArtist) {
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