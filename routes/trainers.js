const express = require("express");
const router = express.Router();

//const trainerSchema = require("../models/trainerModel")
const trainerModel = require("../models/trainerModel");
router.get("/", async (req, res) => {
  try {
    const trainers = await trainerModel.find();
    res.render("trainers.ejs", { trainers });
  } catch (err) {
    console.log(err);
  }
});
router.post("/", (req, res) => {
  // 1. lexu te dhenat e klientit
  let trainerName = req.body.tname;
  let specialization = req.body.specializimi;

  // 2. cka me ba me keto te dhena
  console.log(`emri: ${trainerName} dhe specializimi: ${specialization}`);
  if (trainerName == "trainer1") {
    res.send("U ruajten te dhenat e paradefinuara");
  } else {
    res.send("Post metoda u ekzekutua");
  }
});

router.get("/add", (req, res) => {
  res.render("addTrainer.ejs");
});
router.post("/add", async (req, res) => {
  const trainer = new trainerModel({
    name: req.body.fullName,
    email: req.body.email,
    specialization: req.body.specialization,
  });
  try {
    const tt = await trainer.save();
    res.redirect("/trainers");
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
