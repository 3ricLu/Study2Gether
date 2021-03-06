const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            required: [true, 'Add ID']
        },
        username: {
            type: String,
            required: [true, 'Add name']
        },
        email: {
            type: String,
            required: [true, 'Add an email']
        },
        year:{
            type: Number
        },
        program: {
            type: String
        },
        courses: [{
            type: String
        }]
    }, {
        timestamps: true,
        _id: false
    }
)

module.exports = mongoose.model('User', userSchema)