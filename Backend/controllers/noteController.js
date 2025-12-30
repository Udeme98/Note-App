import Note from "../models/Note.js";

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    if (notes.length === 0) {
      return res.status(404).json({ message: "No notes found" });
    }
    res.status(200).json({
      success: true,
      count: notes.length,
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes", error });
  }
};

const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      data: note,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching note", error });
  }
};

const createNote = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);
    if (!newNote) {
      return res.status(400).json({ message: "Failed to create note" });
    }
    res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error });
  }
};

const updateNote = async (req, res) => {
  try {
    const book = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating note", error });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note", error });
  }
};

export { getAllNotes, getSingleNote, createNote, updateNote, deleteNote };
