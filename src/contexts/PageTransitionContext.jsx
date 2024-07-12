import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathRef = useRef(location.pathname);

  const isWorkPage = (path) => /^\/works\/[a-z0-9-]+$/.test(path);

  const getTransitionDelay = () => {
    const prevPath = prevPathRef.current;
    const currentPath = location.pathname;
    return isWorkPage(prevPath) && !isWorkPage(currentPath) ? 1 : 0;
  };

  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location]);

  const navigateWithTransition = (to) => {
    navigate(to);
  };

  return (
    <TransitionContext.Provider value={{ getTransitionDelay, navigateWithTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => useContext(TransitionContext);