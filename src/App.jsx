import { useEffect, useRef, useState } from 'react'
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
import WorksSingle from './routes/WorksSingle';
import { TransitionProvider } from './contexts/PageTransitionContext';

const themePref = window.matchMedia("(prefers-color-scheme: dark)");

function App() {
  // set initial state to themePref.matches ? 'dark' : 'light' if i want to match user os theme
  const [currentTheme, setCurrentTheme] = useState('light');
  const [hoverElements, setHoverElements] = useState([]);
  const [themeToggle, setThemeToggle] = useState(true);
  
  const toggleTheme = e => {
    e.preventDefault();
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const location = useLocation();
  const [workPage, setWorkPage] = useState(false);


  useEffect(() => {
    //event listener for cursor hoverables
    setHoverElements(document.querySelectorAll('button, a'));
    const isWorkSinglePage = /^\/works\/[^\/]+$/.test(location.pathname);
    setWorkPage(isWorkSinglePage);

    //if work single page disable header theme toggle
    if (isWorkSinglePage) {
      setThemeToggle(false)
    } else {
      setThemeToggle(true);
    }

  }, [location])

  const workReadableTheme = (theme) => {
    if (theme === '') return;
    setCurrentTheme(theme);
  }

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <CustomCursor hoverElements={hoverElements}/>
      <Header 
        toggleThemeFunc={toggleTheme} 
        themeToggleEnabled={themeToggle}
        themeColor={currentTheme} 
        isWorkSingle={workPage} />
      <TransitionProvider>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/background" element={<Background themeColor={currentTheme}/>} />
              <Route path="/toolkit" element={<Toolkit/>} />
              <Route path="/works" element={<Works/>} />
              <Route path="/works/:slug" element={<WorksSingle updateThemeFunc={workReadableTheme}/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </AnimatePresence>
      </TransitionProvider>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
