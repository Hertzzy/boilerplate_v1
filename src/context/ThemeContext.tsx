// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Verificar o tema armazenado no localStorage ao iniciar
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      // Atualiza o localStorage sempre que o tema é trocado
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.body.className = newMode ? 'dark-mode' : 'light-mode'; // Atualiza a classe do body
      return newMode;
    });
  };

  // Atualizar a classe do body ao inicializar
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
