import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await api.get("/notes");

      // Normalize backend data for UI
      const notesData = res.data.data || [];
      const formattedNotes = notesData.map((note) => ({
        id: note._id,
        title: note.title,
        content: note.content,
        createdAt: note.createdAt,
        date: new Date(note.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      }));

      // Sort notes from latest to oldest
      const sortedNotes = formattedNotes.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setNotes(sortedNotes);
    } catch (err) {
      console.error("Error fetching notes:", err);
      setError("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        rightButton={
          <Link
            to="/notes/create"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            <span>New Note</span>
          </Link>
        }
      />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Your Notes
            </h1>
            <p className="text-gray-600">
              {notes.length} {notes.length === 1 ? "note" : "notes"} in your
              collection
            </p>
          </div>

          {/* Notes Grid */}
          {loading ? (
            <div className="text-center py-12 text-gray-500">
              Loading notes...
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">{error}</div>
          ) : notes.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No notes yet. Create your first note!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {notes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDelete={handleDeleteNote}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
