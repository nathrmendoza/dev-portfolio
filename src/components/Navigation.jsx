import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import styled from "styled-components"
import { getTheme } from "../styles/ThemeUtils"

const Navigation = () => {

    return (
        <Nav>
            <LinksContainer >
                <li><CustomLink 
                    to="/" >About me</CustomLink></li>
                <li><CustomLink 
                    to="/background" >Background</CustomLink></li>
                <li><CustomLink 
                    to="/toolkit" >Toolkit</CustomLink></li>
                <li><CustomLink 
                    to="/works" >Works</CustomLink></li>
                <li><CustomLink 
                    to="/contact" >Contact</CustomLink></li>
            </LinksContainer>
        </Nav>
    )
}

const Nav = styled.nav`
    position: relative;
`

const LinksContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 42px;
`

const CustomLink = styled(NavLink)`
    text-decoration: none;
    color: ${getTheme('mainColor')};
    font-size: 24px;
    line-height: 1;
    font-family: ${getTheme('serif')};
    font-weight: 600;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        left: calc(50% - 5px);
        bottom: -5px;
        opacity: 0;
        border-radius: 100%;
        background-color: ${getTheme('mainColor')};
        transition: all 0.3s ease-in-out;
        position: absolute;
    }

    &:hover {
        opacity: 0.75;
        &:after{
            bottom: -20px;
            opacity: 0.5
        }
    }
    
    &.active {
        opacity: 1!important;
        &:after {
            opacity: 1!important;
            bottom: -20px!important;
        }
    }
`


export default Navigation