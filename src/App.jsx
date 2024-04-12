import { createContext, useContext, useState } from 'react';
import './App.css';
import Header from './component/Header'

import Home from './pages/Home';
import EddForm from './component/EddForm';


const ThemeContext = createContext()
const ThemeTogleContext = createContext()
function ThemeProvider({ children }) {
  const [isDarkMOde, setIsDarkMode] = useState(false)
  function togleThene() {
    setIsDarkMode(prev => !prev)
  }
  return (
    <ThemeContext.Provider value={isDarkMOde}>
      <ThemeTogleContext.Provider value={togleThene}>
        {children}
      </ThemeTogleContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useThemeToggle() {
  const context = useContext(ThemeTogleContext)
  if (context === undefined) {
    console.log('error');
  }
  return context
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    console.log('error');
  }
  return context
}

function App() {

  return (
    <ThemeProvider>
      <Header />
      <Home />
    </ThemeProvider>

  );
}

export default App;