import { createContext, useContext, useState } from 'react';

// 1. Create the context object.
//    This is what other components will import to read auth state.
const AuthContext = createContext(null);

// 2. The Provider component — wraps the whole app in main.jsx.
//    It owns the token state and exposes login/logout to all children.
export function AuthProvider({ children }) {
  // Initialize from localStorage so the user stays logged in on page refresh.
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  function login(newToken) {
    localStorage.setItem('token', newToken); // Persist across page refreshes
    setToken(newToken);                      // Trigger a re-render
  }

  function logout() {
    localStorage.removeItem('token');        // Clear from storage
    setToken(null);                          // Trigger a re-render
  }

  // The value object is what every consumer will receive.
  // token === null  → not logged in
  // token === '...' → logged in
  const value = { token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Custom hook — shortcut so components write useAuth() instead of
//    useContext(AuthContext) every time.
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an <AuthProvider>');
  }
  return context;
}
