import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticating: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const navigate = useNavigate();
  
  // Check for the temporary token from OAuth flow
  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const tempToken = getCookie('tempAuthToken');
    if (tempToken) {
      localStorage.setItem('token', tempToken);
      setToken(tempToken);
      document.cookie = 'tempAuthToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    
    setIsAuthenticating(false);
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
    
    // Call backend logout endpoint
    const backendUrl = process.env.NODE_ENV === 'production' 
      ? 'https://openln-engine.onrender.com'
      : 'http://localhost:5000';
      
    fetch(`${backendUrl}/api/auth/logout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    }).catch(err => console.error('Logout error:', err));
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated: !!token,
        token,
        login,
        logout,
        isAuthenticating
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};