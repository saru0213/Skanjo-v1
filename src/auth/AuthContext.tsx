import React, { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  position: string;
  api_key: string;
  is_active: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const SESSION_TIMEOUT_MINUTES = 30;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Load user from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("skanjo_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  // Session timeout logic
  useEffect(() => {
    if (!user) return;
    const timeout = setTimeout(() => {
      logout();
    }, SESSION_TIMEOUT_MINUTES * 60 * 1000);
    return () => clearTimeout(timeout);
  }, [user]);

  const login = useCallback((user: User) => {
    setUser(user);
    localStorage.setItem("skanjo_user", JSON.stringify(user));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("skanjo_user");
    navigate("/login");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 