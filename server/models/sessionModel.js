const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema(
    {
        location: {
            type: String
        },
        roomCode: {
            type: String
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId
        },
        participants: [{
            type: mongoose.Schema.Types.ObjectId
        }],
        time: {
            type: String
        },
        courseCode: {
            type: String,
            required: [true, 'Add course code']
        },
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Session', sessionSchema)