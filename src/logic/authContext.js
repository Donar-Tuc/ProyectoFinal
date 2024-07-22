import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedUserId = localStorage.getItem('userId');
    if (savedIsLoggedIn && savedUserId) {
      setIsLoggedIn(true);
      setUserId(savedUserId);
    }
  }, []);

  const login = (userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
