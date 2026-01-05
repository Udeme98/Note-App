import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Load user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, [token]);

  const login = async (credentials) => {
    const res = await api.post("/auth/login", credentials);

    setUser(res.data.data);
    setToken(res.data.token);

    localStorage.setItem("user", JSON.stringify(res.data.data));
    localStorage.setItem("token", res.data.token);
  };

  const register = async (data) => {
    const res = await api.post("/auth/register", data);

    setUser(res.data.data);
    setToken(res.data.token);

    localStorage.setItem("user", JSON.stringify(res.data.data));
    localStorage.setItem("token", res.data.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
