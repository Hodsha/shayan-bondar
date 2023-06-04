import React, { createContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: {
    darkMode: boolean;
    toggleDarkMode: () => void;
  };
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: {
    darkMode: false,
    toggleDarkMode: () => {},
  },
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('mode', newMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: { darkMode, toggleDarkMode } }}>
      <div className={`bg-${darkMode ? '#18181b' : 'gray-100'} min-h-screen`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
