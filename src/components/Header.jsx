import styled from 'styled-components'

import { MainNoHeight } from '../styles/ThemeContainers'
import DarkLogo from '../assets/NM-dark.svg?react'
import LightLogo from '../assets/NM-light.svg?react'
import LinkedinCircle from '../assets/circle-linkedin.svg?react'

import { FaGithub } from 'react-icons/fa'
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

import { getTheme } from '../styles/ThemeUtils'
import LogoAnimWrapper from '../utils/LogoAnimWrapper'

import Navigation from './Navigation'
import { Link } from 'react-router-dom'

const Header = ({toggleThemeFunc, themeColor}) => {
    
    const defaultSocMed = {
        width: '30px',
        height: '30px',
        color: themeColor === 'light' ? '#363636' : '#FFFFFF'
    }

    return (
        <HeaderMain>
            <MainNoHeight>    
                <FlexContainer>
                    <LogoContainer>
                        <Link to="/">
                            <LogoAnimWrapper>
                                {themeColor === 'light' 
                                    ? <DarkLogo width="125" height="71" />
                                    : <LightLogo width="125" height="71" />
                                }
                            </LogoAnimWrapper>
                        </Link>
                    </LogoContainer>
                    <NavContainer>
                        <Navigation />
                    </NavContainer>
                    <STTContainer>
                        <SocMedAnchor href="https://www.linkedin.com/in/nathaniel-mendoza-425203163/" className='socLink' target="_blank" rel="noopener noreferrer">
                            <CustomLinkedin/>
                        </SocMedAnchor>
                        <SocMedAnchor href="https://github.com/nathrmendoza" className='socLink' target="_blank" rel="noopener noreferrer">
                            <FaGithub style={defaultSocMed}/>
                        </SocMedAnchor>
                        <ThemeToggleButton onClick={e => {toggleThemeFunc(e)}}>
                            <ThemeIconsContainer className={themeColor}>
                                <MdSunny className='sun'/>
                                <IoMdMoon className='moon'/>
                            </ThemeIconsContainer>
                        </ThemeToggleButton>
                    </STTContainer>
                </FlexContainer>
            </MainNoHeight>
        </HeaderMain>
    )
}

const HeaderMain = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: sticky;
    background-color: ${getTheme('bodyColor')};
    z-index: 99;
    transition: background-color 0.6s ease-in-out;
`

const NavContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const LogoContainer = styled.div`
    position: relative;
    width: 125px;
    height: 71px;
`

const CustomLinkedin = styled(LinkedinCircle)`
    width: 30px;
    height: 30px;

    path {
        fill: ${getTheme('mainColor')}
    }
`

const STTContainer = styled.div`
    display: flex;
    align-items: center;

    a.socLink {
        margin-right: 20px;
        display: inline-block;
        text-decoration: none;
        &:last-of-type {
            margin-right: 0;
        }
    }
`

const ThemeToggleButton = styled.button`
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    position: relative;
    width: 108px;
    height: 36px;
    overflow: hidden;
    margin-left: 10px;
`

const ThemeIconsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 108px;
    height: 108px;
    transform-origin: center;

    &.light {
        animation: 0.6s toSun forwards ease-in-out;
    }
    &.dark {
        animation: 0.6s toMoon forwards ease-in-out;
    }

    svg {
        position: absolute;
        width: 36px;
        height: 36px;
        transform: translateX(-50%);
        left: 50%;
        cursor: pointer;

        &.sun {
            top: 0;
            color: #363636;
        }
        &.moon {
            bottom: 0;
            color: #ffffff;
            transform: rotate(180deg) translateX(50%);
        }
    }
`

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 42px 0;
    position: relative;
`
    const SocMedAnchor = styled.a`
        text-decoration: none;
        display: inline-block;
        transition: all 0.2s ease-in-out;
        position: relative;
        height: 30px;
        width: 30px;
        
        &:before {
            position: absolute;
            top: 50%;
            left: 50%;
            content: '';
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 3px solid ${getTheme('socBorder')};
            transition: all 0.4s 0.12s ease-in-out;
            display: inline-block;
            transform-origin: center;
            transform: translate(-50%, -50%);
            opacity: 0
        }
        &:hover {
            opacity: 0.75;
            transform: scale(0.9);
    
            &:before, &:after {
                transform: scale(1.2) translate(-42%, -42%);
                opacity: 1;
            }
        }
        svg {
            position: relative;
            z-index: 2;
        }
    `

export default Header