import express from "express";
import {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllNotes); // route to get all notes
router.get("/:id", protect, getSingleNote); // route to get single note by id
router.post("/", protect, createNote); // route to create a new note
router.put("/:id", protect, updateNote); // route to update a note by id
router.delete("/:id", protect, adminOnly, deleteNote); // route to delete a note by id

export default router;
