import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 md:px-12 py-20  text-center flex-1">
        {/* Tagline */}
        <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-8">
          ✨ Your thoughts, beautifully organized
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Capture ideas that
          <br />
          <span className="text-orange-500">inspire you</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          A minimalist note-taking app designed for clarity and focus. Write,
          organize, and revisit your thoughts with elegance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            to="/notes/create"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            Start Writing <span>→</span>
          </Link>
          <Link
            to="/notes"
            className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            View Notes
          </Link>
        </div>

        {/* Feature Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Designed to get out of your way so you can focus on what matters
            most—your ideas.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">📌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Organize
              </h3>
              <p className="text-gray-600">
                Keep your notes structured and easy to find
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Write
              </h3>
              <p className="text-gray-600">
                Express your thoughts with a clean, distraction-free editor
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Find</h3>
              <p className="text-gray-600">
                Quickly search and access your notes anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
