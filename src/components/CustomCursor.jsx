import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { getTheme } from '../styles/ThemeUtils'
import { useNavigate } from 'react-router-dom';

const CustomCursor = () => {

  const mouseContainer = useRef(null);
  
  const [isBottom, setIsBottom] = useState(false);
  const [fillPercent, setFillPercent] = useState(0);
  const [scrollTime, setScrollTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = ev => {
        if (mouseContainer.current) {
            const {clientX, clientY} = ev;
            
            mouseContainer.current.style.left = `${clientX}px`;
            mouseContainer.current.style.top = `${clientY}px`;
        }
     }

    //hovering
    const hoverElements = document.querySelectorAll('button, a');
    const handleMouseEnter = () => {
        if (mouseContainer.current) {
            mouseContainer.current.style.width = '56px';
            mouseContainer.current.style.height = '56px';
        }
    }
    
    const handleMouseLeave = () => {
        if (mouseContainer.current) {
            mouseContainer.current.style.width = '72px';
            mouseContainer.current.style.height = '72px';
        }
    }

    // const handleScroll = () => {
    //     if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
    //         setIsBottom(true);
    //     } else {
    //         setIsBottom(false);
    //     }
    // }

    // const handleMouseWheel = ev => {
    //     setScrollTime(Date.now());
        
    //     if (isBottom && ev.deltaY > 0) {
    //         const now = Date.now();
    //         const timeSinceLastScroll = now - scrollTime;
    //         const maxScrollTime = 2000;
    //         let scrollPercentage = (timeSinceLastScroll / maxScrollTime) * 100;
    //         //clamp it to 100
    //         scrollPercentage = Math.min(scrollPercentage, 100);

    //         setFillPercent(scrollPercentage);
    //     }
    // }

    //events
    window.addEventListener('mousemove', handleMouseMove);
    // window.addEventListener('scroll', handleScroll);
    // window.addEventListener('wheel', handleMouseWheel);
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
    })

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        // window.removeEventListener('scroll', handleScroll);
        // window.removeEventListener('wheel', handleMouseWheel);
        hoverElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        })
    }

  }, [isBottom])

  return (
    <CursorContainer ref={mouseContainer} style={{background: `linear-gradient(0deg, rgba(54,54,54,1) 0%, rgba(54,54,54,1) ${fillPercent}%, rgba(54,54,54,0) ${fillPercent}%)`}}>
        <CursorInnerText>Sample</CursorInnerText>
    </CursorContainer>
  )
}

const CursorContainer = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 100%;
    border: 3px solid ${getTheme('mainColor')};
    position: fixed;
    z-index: 100;
    background: ${getTheme('mainColor')};
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: width 0.15s ease-out, height 0.15s ease-out, background 0.15s cubic-bezier(0.6, 0.01, 0.05, 0.95);
`

const CursorInnerText = styled.span`
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${getTheme('bodyColor')};
    pointer-events: none;
    opacity: 0;
`

export default CustomCursor