import { motion } from 'framer-motion';
import React, { useState } from 'react'
import styled from 'styled-components'
import hextToRgb from '../utils/hextToRgb';
import { getTheme } from '../styles/ThemeUtils';

const animateVariants = {
    closed: {
        height: '640px',
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], 
            duration: 1.6,
        }
    },
    opened: {
        height: 'auto',
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], 
            duration: 1.6,
        }
    }
}

const FeaturedImage = ({imagePath, width, alt, themeColor}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ImageWrapper
        variants={animateVariants}
        initial="closed"
        animate={isOpen ? "opened" : ""} 
        $width={width} 
        onClick={() => setIsOpen(!isOpen)}>
        <img src={imagePath} width={width} height="auto" alt={alt} />
        {themeColor &&
        <HoverContainer 
            $red={hextToRgb(themeColor).r}
            $green={hextToRgb(themeColor).g}
            $blue={hextToRgb(themeColor).b} 
            style={{opacity: isOpen ? 0 : 1}}>
            <HoverText className='hoverText'>Click to View More</HoverText>
        </HoverContainer>}
    </ImageWrapper>
  )
}

const ImageWrapper = styled(motion.div)`
    width: 100%;
    max-width: ${props => props.$width}px;
    margin: 56px auto 0;
    overflow: hidden;
    position: relative;
    &:hover .hoverText {
        opacity: 0.5;
    }
`

const HoverContainer = styled(motion.div)`
    width: 100%;
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 50%;
    transition: all 0.6s cubic-bezier(0.6, 0.01, 0.05, 0.95);
    background: rgb(${props => props.$red},${props => props.$green},${props => props.$blue});
    background: linear-gradient(0deg, rgba(${props => props.$red},${props => props.$green},${props => props.$blue},1) 0%, rgba(${props => props.$red},${props => props.$green},${props => props.$blue},1) 25%, rgba(${props => props.$red},${props => props.$green},${props => props.$blue},0) 100%);
`

const HoverText = styled.button`
    border: none;
    background: none;
    font-size: 24px;
    line-height: 1;
    font-family: ${getTheme('serif')};
    font-style: italic;
    font-weight: 600;
	color: ${getTheme('mainColor')};
    position: absolute;
    bottom: 42px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s cubic-bezier(0.6, 0.01, 0.05, 0.95);
`

export default FeaturedImage