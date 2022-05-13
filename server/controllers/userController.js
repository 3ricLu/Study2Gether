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

const setUserInfo = asyncHandler(async(req, res) => {

})

const addCourse = asyncHandler(async(req, res) => {

})

const removeCourse = asyncHandler(async(req, res) => {

})

module.exports = {
    addUser,
    setUserInfo,
    addCourse,
    removeCourse
}