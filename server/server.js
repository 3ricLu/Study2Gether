const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const port = process.env.PORT || 5000
//const connectDB = require('./config/db')

//connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

// http://localhost:8080/api/readings