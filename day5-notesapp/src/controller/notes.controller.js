const notesModel = require("../models/notes.models");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;

    let newNote = await notesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getNotesController = async (req, res) => {
  try {
    const allNotes = await notesModel.find();
    res.status(200).json({
      message: "all notes fetched",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const singleNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let note = await notesModel.findById(noteId);

    res.status(200).json({
      message: "note fetched successfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updateNote = await notesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    await notesModel.findByIdAndDelete(noteId);
    return res.status(200).json({
      message: "Note deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};

module.exports = {
  createNotesController,
  getNotesController,
  singleNotesController,
  updateNotesController,
  deleteNoteController,
};
