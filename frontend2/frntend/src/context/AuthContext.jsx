import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../services/api';
import { jwtDecode } from 'jwt-decode';

// Create context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if token exists and is valid on app load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          // Check if token is expired
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;
          
          if (decodedToken.exp < currentTime) {
            // Token expired
            localStorage.removeItem('token');
            setCurrentUser(null);
            navigate('/signup'); // Redirect to login page if token is expired
          } else {
            // Token valid, fetch user data
            const response = await authService.getCurrentUser();
            setCurrentUser(response.data);

            // If user is logged in and on the home page, redirect to after-login
            if (location.pathname === '/') {
              navigate('/after-login');
            }
          }
        } catch (err) {
          console.error('Auth error:', err);
          localStorage.removeItem('token');
          setCurrentUser(null);
          navigate('/signup'); // Redirect to login if there's an error
        }
      }
      
      setLoading(false);
    };

    checkAuth();
  }, [location, navigate]); // Runs whenever location or navigate changes

  // Login function
  const login = async (email, password) => {
    try {
      setError(null);
      const response = await authService.login({ email, password });
      const { token, username, level, xp } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Set user data
      const decodedToken = jwtDecode(token);
      setCurrentUser({
        id: decodedToken.user_id,
        username,
        level,
        xp
      });
      
      navigate('/after-login'); // Redirect to after-login page after login
      return true;
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
      return false;
    }
  };

  // Signup function
  const signup = async (username, email, password) => {
    try {
      setError(null);
      await authService.signup({ username, email, password });
      return true;
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
    navigate('/'); // Redirect to homepage on logout
  };

  // Update user data (after XP gain, etc.)
  const updateUserData = (newData) => {
    setCurrentUser(prev => ({
      ...prev,
      ...newData
    }));
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    signup,
    logout,
    updateUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
