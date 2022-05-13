const express = require('express')
const router = express.Router()

const {
    addUser,
    setUserInfo,
    addCourse,
    removeCourse
} = require('../controllers/userController')

router.route('/').post(addUser)

module.exports = router