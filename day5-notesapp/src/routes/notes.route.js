const express = require("express");
const {
  createNotesController,
  getNotesController,
  singleNotesController,
  updateNotesController,
  deleteNoteController,
} = require("../controller/notes.controller");
const notesModel = require("../models/notes.models");

const router = express.Router();

//create api ->Create
router.post("/create", createNotesController);

//get api -> Read
router.get("/allNotes", getNotesController);

//single api ->Read One
router.get("/:id", singleNotesController);

//Update the data
router.put("/:id", updateNotesController);

//delete
router.delete("/:id",deleteNoteController)

module.exports = router;
