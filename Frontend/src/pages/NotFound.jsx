import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="w-full flex flex-col items-center justify-center px-8 py-12 text-center">
        {/* 404 Icon */}
        <div className="w-32 h-32 bg-orange-200 rounded-3xl flex items-center justify-center mb-8">
          <span className="text-6xl">🔍</span>
        </div>

        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition flex items-center gap-2"
        >
          <span>🏠</span>
          Go Back Home
        </Link>

        {/* Additional Links */}
        <div className="mt-12 flex gap-6">
          <Link
            to="/login"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Login
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            to="/register"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
