import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter a note title");
      return;
    }

    if (!content.trim()) {
      toast.error("Please enter note content");
      return;
    }

    setLoading(true);

    try {
      await api.post("/notes", {
        title: title.trim(),
        content: content.trim(),
      });

      toast.success("Note created successfully!");
      navigate("/notes");
    } catch (err) {
      console.error("Error creating note:", err);
      toast.error(err.response?.data?.message || "Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/notes"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Back to Notes</span>
          </Link>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm">
          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title..."
            className="w-full px-8 py-6 text-4xl font-semibold text-gray-800 placeholder-gray-300 border-none focus:outline-none focus:ring-0 rounded-t-lg"
            maxLength={100}
          />

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Content Textarea */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your note..."
            className="w-full px-8 py-6 text-lg text-gray-700 placeholder-gray-300 border-none focus:outline-none focus:ring-0 resize-none rounded-b-lg"
            rows={20}
            style={{ minHeight: "500px" }}
          />
        </form>
      </div>
    </div>
  );
}
