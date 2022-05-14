const express = require('express')
const router = express.Router()

const {
    createSession,
    joinSession
} = require('../controllers/sessionController')

router.route('/').post(createSession)
router.route('/newUser').post(createSession)

module.exports = router