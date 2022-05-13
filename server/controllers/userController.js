const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const addUser = asyncHandler(async (req, res) => {
    const newUser = await User.create({
        _id: req.body._id,
        username: req.body.username,
        email: req.body.email
    })

    res.status(200).json(newUser);
})

module.exports = {
    addUser
}