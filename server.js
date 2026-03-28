const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const url = require('./url')

const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// MongoDB connection
mongoose.connect(url, { dbName: 'nodedb' })
.then(() => {
    console.log('✅ MongoDB Connected Successfully')
})
.catch((err) => {
    console.log('❌ MongoDB Connection Error:', err)
})

// server port
const port = 8080

app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`)
})