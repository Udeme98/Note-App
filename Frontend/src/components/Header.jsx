import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Header({ rightButton }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-6">
      <Link
        to="/"
        className="flex items-center gap-2 hover:opacity-80 transition"
      >
        <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">📝</span>
        </div>
        <span className="text-2xl font-bold text-gray-900">Notely</span>
      </Link>
      {rightButton ||
        (user ? (
          <button
            onClick={handleLogout}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Sign In
          </Link>
        ))}
    </nav>
  );
}
