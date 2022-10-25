const express = require('express')
const router = express.Router()
const USER_MODEL = require('../models/user')
const admin = require('../configure/firebase.configure')

router.get('/login', async (req, res) => {
  console.log(req.headers)
  if (!req.headers.authorization) {
    return res.status(500).json({
      message: "Invalid Token here"
    })
  }
  const token = await req.headers.authorization.split(" ")[1]

  try {
    const decodeToken = await admin.auth().verifyIdToken(token)
    console.log(decodeToken);

    const userExist = await USER_MODEL.findOne({
      userId: decodeToken.user_id
    })

    //if exist update 

    if (!userExist) {
      const create = await USER_MODEL.create({
        name: decodeToken.name,
        email: decodeToken.email,
        email_verified: decodeToken.email_verified,
        userId: decodeToken.user_id,
        image_URL: decodeToken.picture,
        access_time: decodeToken.auth_time,
        role: "member"
      })
      if (create) return res.status(200).json({
        message: create
      })
    } else {
      const update = await USER_MODEL.findOneAndUpdate({
        userId: decodeToken.user_id
      }, {
        access_time: decodeToken.auth_time
      }, {
        upsert: true,
        new: true
      })

      if (update) return res.status(200).json({
        message: "UPDATED",
        update
      })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error
    })

  }
})

router.get('/all-users', async (req, res) => {
  try {
    const users = await USER_MODEL.find({})
    if (users) return res.status(200).json({
      message: "success",
      users
    })
    else return res.status(400).json({
      message: "No User Exist"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Wrong Happens"
    })
  }
})

router.put('/update-role/:id', async (req, res) => {
  try {
    console.log("updation");
    const userId=req.params.id
    const Exist=await USER_MODEL.findById(userId)
    if(Exist){
      const update=await USER_MODEL.findOneAndUpdate({_id:userId},{
        role:req.body.role
      },{
        new:true
      })

      if(update) return res.status(200).json({message:"Update SuccesFully",update})
      else return res.status(400).json({message:"Not Updated"})
    }
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;