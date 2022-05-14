const express = require('express')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const port = process.env.PORT || 5000
const connectDB = require('./db')

connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/apiv1/users', require('./routers/userRoutes'))
app.use('/apiv1/sessions', require('./routers/sessionRoutes'))

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});