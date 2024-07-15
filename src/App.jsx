import { useEffect, useRef, useState } from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import useScrollToTop from './hooks/scrollReset';

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { lightTheme, darkTheme } from './styles/theme'

//routes
import NotFound from './notfound';
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

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [hoverElements, setHoverElements] = useState([]);

  const isTouch = window.matchMedia("(any-pointer: coarse)").matches;

  
  //reset scroll
  useScrollToTop();
  
  const toggleTheme = e => {
    e.preventDefault();
    setCurrentTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const location = useLocation();
  const [isWorkSingle, setIsWorkSingle] = useState(false);


  useEffect(() => {
    //event listener for cursor hoverables
    setHoverElements(document.querySelectorAll('button, a'));

    const checkPathForSingle = /^\/works\/[^\/]+$/.test(location.pathname);
    setIsWorkSingle(checkPathForSingle);

  }, [location])

  const workReadableTheme = (theme) => {
    if (theme === '') return;
    setCurrentTheme(theme);
  }

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      {
        !isTouch && <CustomCursor hoverElements={hoverElements}/>
      }
      <Header 
        toggleThemeFunc={toggleTheme} 
        themeColor={currentTheme} 
        isWorkSingle={isWorkSingle} />
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
      <Footer isWorkSingle={isWorkSingle}/>
    </ThemeProvider>
  )
}

export default App
