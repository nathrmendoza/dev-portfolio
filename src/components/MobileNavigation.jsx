import React, { useState } from 'react'
import styled from 'styled-components';
import { getTheme } from '../styles/ThemeUtils';
import { AnimatePresence, motion } from 'framer-motion';
import customNavigation from '../hooks/customNavigation';

const bgVariants = {
    initial: {
        width: 0,
        height: 0
    },
    animate: {
        width: '200vh',
        height: '200vh',
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], 
            duration: 1.2,
        }
    },
    final: {
        opacity: 0,
        width: 0,
        height: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], 
            duration: 1,
            delay: 0.2
        }
        
    }
}

const menuVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], 
            duration: 0.6,
            delay: 0.5
        }
    },
    final: {
        opacity: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95], 
            duration: 0.6,
            delay: 0
        }
    }
}

const MobileNavigation = () => {
    const [mobToggled, setMobToggled] = useState(false);
    const customLinkTo = customNavigation();

    const handleToggleClick = e => {
        e.preventDefault();
        setMobToggled(!mobToggled);
    }

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        setMobToggled(false);
        customLinkTo(path);
    }


    return (  
        <AnimatePresence>
            <MobToggle className={mobToggled && 'active'} onClick={handleToggleClick}>
                <i></i><i></i><i></i>
            </MobToggle>
            {mobToggled &&
                <FixedBackground 
                    key="fixedBg"
                    variants={bgVariants}
                    initial="initial"
                    animate="animate"
                    exit="final" />
            }
            {mobToggled && 
                <MenuContainer
                key="mobMenu"
                variants={menuVariants} 
                intiial="initial"
                animate="animate"
                exit="final" >
                    <MenuItem>
                        <Link onClick={e => handleLinkClick(e, '/')}>About Me</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link onClick={e => handleLinkClick(e, '/background')}>Background</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link onClick={e => handleLinkClick(e, '/toolkit')}>Toolkit</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link onClick={e => handleLinkClick(e, '/works')}>Works</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link onClick={e => handleLinkClick(e, '/contact')}>Contact</Link>
                    </MenuItem>
                </MenuContainer>
            }
            
        </AnimatePresence>
    )
}

const FixedBackground = styled(motion.div)`
    width: 0;
    height: 0;
    pointer-events: none;
    border-radius: 100%;
    background-color: ${getTheme('mainColor')};
    position: fixed;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%)
`

const MobToggle = styled.button`
    width: 32px;
    height: 26px;
    position: relative;
    background: none;
    border: none;
    z-index: 1000;

    i {
        display: inline-block;
        width: 32px;
        height: 4px;
        background-color: ${getTheme('mainColor')};
        position: absolute;
        transform-origin: center;
        transition: all 0.15s cubic-bezier(0.6, 0.01, 0.05, 0.95);

        &:first-child {
            top: 0;
            left: 0;
        }
        &:nth-child(2) {
            top: calc(50% - 2px);
            left: 0;
        }
        &:last-child {
            bottom: 0;
            left: 0;
        }
    }
        
    &.active {
        i {
            background-color: ${getTheme('bodyColor')};
            &:first-child {
                top: calc(50% - 2px);
                transform: rotate(45deg);
            }
            &:nth-child(2) {
                opacity: 0;
            }
            &:last-child {
                bottom: calc(50% - 1px);
                transform: rotate(-45deg);
            }
        }
    }
`

const MenuContainer = styled(motion.ul)`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
`

const MenuItem = styled.li`
    display: inline-block;
    margin-bottom: 32px;
    &:last-child {
        margin-bottom: 0;
    }
`

const Link = styled.button`
    text-decoration: none;
    color: inherit;
    border: none;
    background: none;
    transition: all 0.15s cubic-bezier(0.6, 0.01, 0.05, 0.95);
    color: ${getTheme('bodyColor')};
    font-family: ${getTheme('serif')};
    font-size: 24px;
    line-height: 1;
    font-style: italic;
    font-weight: 600;

    &:hover, &:focus {
        opacity: 0.75
    }
`

export default MobileNavigation