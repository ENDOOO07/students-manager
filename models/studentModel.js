const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // _id:{
  //     type : mongoose.ObjectId
  // },
  email: {
    type: String,
    require: true,
  },
  appliedCourses: {
    type: Array,
  },
  certificates: {
    type: Array,
  },
  age: {
    type: Number,
  },
  Name: {
    type: String,
  },
});
module.exports = mongoose.model("students", studentSchema);
