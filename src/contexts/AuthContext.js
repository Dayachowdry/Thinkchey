import React, { createContext, useContext, useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/user`, {
          withCredentials: true,
        });
        if (response.data.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        console.log('Not authenticated');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = useGoogleLogin({
    onSuccess: async response => {
      try {
        // Send access token to backend
        const result = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/auth/google`,
          {
            access_token: response.access_token,
          },
          { withCredentials: true }
        );

        setUser(result.data.user);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: error => console.error('Login Failed:', error),
  });

  const logout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
