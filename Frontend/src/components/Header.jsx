import { Link } from "react-router-dom";

export default function Header({ rightButton }) {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">📝</span>
        </div>
        <span className="text-2xl font-bold text-gray-900">Notely</span>
      </div>
      {rightButton || (
        <Link
          to="/login"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Sign In
        </Link>
      )}
    </nav>
  );
}
