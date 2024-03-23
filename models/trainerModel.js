
const mongoose = require('mongoose')

const trainerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email : {
        type: String
    },
    specialization : {
        type : String
    },
    courses : {
        type : Array
    }
})

module.exports = mongoose.model('trainers', trainerSchema)