"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Tipos de dados do usuário
interface User {
  _id: number;
  name: string;
  email: string;
  password: string;
  type: string;
  Ra: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  isDeleted: boolean;
  isLocked: boolean;
  profilePicture: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  setUser: (user: User | null) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType & { isLoading: boolean } | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const storedIsAdmin = localStorage.getItem("isAdmin") === "true";
      const storedUser = localStorage.getItem("user");
  
      if (storedUser && storedIsLoggedIn) {
        setUser(JSON.parse(storedUser));
        setIsLoggedIn(storedIsLoggedIn);
        setIsAdmin(storedIsAdmin);
      }
  
      setIsLoading(false); // <- sinaliza que terminou de carregar
    }
  }, []);  

  // Atualizar localStorage quando o estado mudar
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isLoggedIn && user) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
      } else {
        localStorage.clear();
      }
    }
  }, [isLoggedIn, user, isAdmin]);

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, isAdmin, setUser, setIsLoggedIn, setIsAdmin, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
