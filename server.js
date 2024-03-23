const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()

mongoose.connect(process.env.DBCONN)
const db = mongoose.connection

db.on("error", () => {
    console.log("Error....")
})

db.once("open" , () => {
    console.log("Connected with db....")
})

app.use(express.urlencoded({extended : true}))

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
const courseRoutes = require('./routes/courses')
const examRoutes = require('./routes/exams')
const studentRoutes = require('./routes/students')
const trainerRoutes = require('./routes/trainers')

app.get('/',(req,res)=>{
    res.send('Home Page')
})
app.use('/courses' , courseRoutes) // /courses/ , /courses/new/
app.use('/exams' , examRoutes)
app.use('/students', studentRoutes)
app.use('/trainers' , trainerRoutes)


app.listen(process.env.PORT , () => {
    console.log(`Server is running in port ${process.env.PORT}`)
})