//Depenedencies
require('dotenv').config()
require('./config/db.connection')

// const { response } = require('express')
const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const peopleRouter = require("./routes/people-router")

//Configuration
const app = express()
const { PORT } = process.env

//Routes
app.get("/", (req, res) => { res.send("hello world");});

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

// all requests for endpoints that begin with '/people'
app.use('/people', peopleRouter)

//servers instance
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));