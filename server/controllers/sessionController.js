const Session = require('../models/sessionModel')
const asyncHandler = require('express-async-handler');
const { group } = require('console');

const createSession = asyncHandler(async (req, res) => {
    const newSession = await Session.create({
        courseCode: req.body.code,
        admin: req.body.id,
        time: req.body.time,
        location: req.body.location,
        roomCode: req.body.room
    })

    res.status(200).json(newSession);
})

const joinSession = asyncHandler(async(req, res) => {
    const foundSession = await group.findById(req.params.id)
    foundSession.participants.push(req.body.userID)
    await foundSession.save()
    res.status(200)
})

module.exports = {
    createSession,
    joinSession
}