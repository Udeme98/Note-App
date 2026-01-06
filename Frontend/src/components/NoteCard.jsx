import { Link } from "react-router-dom";
import { Clock, Pencil, Trash2 } from "lucide-react";

export default function NoteCard({ note }) {
  const handleEdit = (e) => {
    e.preventDefault();
    // TODO: Implement edit functionality
    console.log("Edit note:", note.id);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // TODO: Implement delete functionality
    console.log("Delete note:", note.id);
  };

  return (
    <Link
      to={`/notes/${note.id}`}
      className="bg-white rounded-lg border p-6 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold mb-3">{note.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
      <div className="flex items-center justify-between text-gray-500 text-sm">
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
            onClick={handleDelete}
            className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
            title="Delete note"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
