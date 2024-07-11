import { useEffect, useState } from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { lightTheme, darkTheme } from './styles/theme'

//routes
import NotFound from './notfound';
import Root from './routes/Root';
import Home from './routes/Home';
import Background from './routes/Background';
import Toolkit from './routes/Toolkit';
import Works from './routes/Works';
import Contact from './routes/Contact';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const themePref = window.matchMedia("(prefers-color-scheme: dark)");

function App() {
  // set initial state to themePref.matches ? 'dark' : 'light' if i want to match user os theme
  const [currentTheme, setCurrentTheme] = useState('light');
  
  const toggleTheme = e => {
    e.preventDefault();
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const location = useLocation(); 

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <CustomCursor />
      <Header toggleThemeFunc={toggleTheme} themeColor={currentTheme}/>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/background" element={<Background themeColor={currentTheme}/>} />
          <Route path="/toolkit" element={<Toolkit/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AnimatePresence>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
