"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { logoutUser, meUser } from "../../api/authCrud";

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  user_type: string;
  ra?: string;
  curso?: string;
  turma?: string;
  rg?: string;
  materia?: string;
  created_at: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  login: (data: User) => void;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Carrega usuário automaticamente via cookie
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await meUser(); // <<< FALTAVA ISSO

        if (session?.authenticated && session.user) {
          setUser(session.user);
          setIsLoggedIn(true);
          setIsAdmin(session.user.role === "admin");
        }
      } catch (e) {
        // usuário não logado, ignora erro
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsAdmin(userData.role === "admin");
  };

  const logout = async () => {
    await logoutUser();

    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, isAdmin, isLoading, login, logout, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used inside <UserProvider>");
  }
  return ctx;
};
