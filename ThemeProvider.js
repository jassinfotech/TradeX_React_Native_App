import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    async function loadMode() {
      try {
        const savedMode = await AsyncStorage.getItem('@theme_mode');
        if (savedMode !== null) {
          setIsDarkMode(savedMode === 'dark'); 
        }
      } catch (error) {
        console.error('Error loading theme mode from AsyncStorage:', error);
      }
    }
    loadMode();
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    AsyncStorage.setItem('@theme_mode', newMode ? 'dark' : 'light').catch(error => {
      console.error('Error saving theme mode to AsyncStorage:', error);
    });
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? '#fff' : '#001020',
      text: isDarkMode ? '#122C73' : '#dddd',
    },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
