const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const StudentModel = require("../models/studentModel");
const studentModel = require("../models/studentModel");
//const studentModel = require('../models/studentModel')

router.get("/", async (req, res) => {
  const students = await studentModel.find();
  res.render("students.ejs", { students });
});

router.post("/", (req, res) => {
  res.send("Forma eshte bere submit...");
});

router.get("/add", async (req, res) => {
  const id = req.query.id;
  //console.log(id);
  const student = await StudentModel.findById(id);
  if (student) {
    res.render("addStudent.ejs", {
      name: student.Name,
      email: student.email,
      id: student.id,
    });
  } else {
    res.render("addStudent.ejs");
  }
});

router.post("/add", async (req, res) => {
  //leximi i te dhenave te derguara permes formes
  //inicializimi i propertive te modelit student
  const id = req.query.id;
  console.log(id);
  const std = new StudentModel({
    Name: req.body.fullName,
    email: req.body.email,
  });
  if (id) {
    //res.json({message: "Kodi per update"})
    try {
      const updatedStudent = { $set: { ...std } };
      // const stdU = await StudentModel.updateOne({ _id: id }, updatedStudent, { new: true });
      const stdU = await StudentModel.updateOne(
        { _id: id },
        {
          $set: {
            // <-- set stage
            id: id, // <-- id not _id
            Name: req.body.fullName,
            email: req.body.email,
          },
        }
      );
      res.redirect("/students");
    } catch (err) {
      res.json({ message: err.message });
    }
  } else {
    try {
      const newStudent = await std.save();
      res.redirect("/students");
    } catch (ex) {
      res.json({ message: ex.message });
    }
  }
});

router.delete("/:id", async (req, res) => {
  //console.log(req.params.id);
  var id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const student = await StudentModel.findByIdAndDelete(id);
    console.log(students);
    if (!student) {
      res.json({ message: "Student not found" });
    } else {
      res.json({ message: "Student is deleted..." });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
});

//search for specific student
router.get("/search/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const students = await studentModel.find({ Name: new RegExp(name, "i") }); // Use RegExp for case-insensitive search
    res.json(students);
  } catch (err) {
    res.json({ massage: err.message });
  }
});

module.exports = router;
