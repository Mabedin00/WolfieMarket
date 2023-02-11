// THESE ARE NODE APIs WE WISH TO USE
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

// CREATE OUR SERVER
dotenv.config()
const PORT = process.env.PORT || 5000;
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

// SETUP OUR OWN ROUTERS AS MIDDLEWARE
const wolfiemarketRouter = require('./routes/wolfiemarket-router')
app.use('/api', wolfiemarketRouter)

// INITIALIZE OUR DATABASE OBJECT
const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// PUT THE SERVER IN LISTENING MODE
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))