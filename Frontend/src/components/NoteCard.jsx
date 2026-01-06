import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock, Pencil, Trash2 } from "lucide-react";
import api from "../api/axios";

export default function NoteCard({ note, onDelete }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/notes/edit/${note.id}`);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = async (e) => {
    e.preventDefault();
    setIsDeleting(true);
    try {
      await api.delete(`/notes/${note.id}`);
      setShowDeleteDialog(false);
      if (onDelete) {
        onDelete(note.id);
      }
    } catch (err) {
      console.error("Error deleting note:", err);
      alert("Failed to delete note. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = (e) => {
    e.preventDefault();
    setShowDeleteDialog(false);
  };

  return (
    <>
      <Link
        to={`/notes/${note.id}`}
        className="bg-white rounded-lg border p-6 hover:shadow-lg transition flex flex-col h-full"
      >
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3">{note.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
        </div>
        <div className="flex items-center justify-between text-gray-500 text-sm mt-auto">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {note.date}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleEdit}
              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition"
              title="Edit note"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={handleDeleteClick}
              className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
              title="Delete note"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Delete this note?
            </h3>
            <p className="text-gray-600 mb-6">
              This action cannot be undone. This will permanently delete your
              note.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelDelete}
                disabled={isDeleting}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
