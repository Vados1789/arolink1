import React, { createContext, useState, useEffect } from 'react';
import { Text } from 'react-native';  // Import Text from react-native
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };
    loadUserData();
  }, []);

  // Define the login function
  const login = async (userData) => {
    setUser(userData);
    await AsyncStorage.setItem('user', JSON.stringify(userData));  // Persist user data in AsyncStorage
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  if (loading) {
    return <Text>Loading...</Text>;  // Display loading while checking AsyncStorage
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
