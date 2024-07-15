import styled from "styled-components"
import { getTheme } from "../styles/ThemeUtils"
import customNavigation from "../hooks/customNavigation"

const Navigation = () => {

    const customLinkTo = customNavigation();

    return (
        <Nav>
            <LinksContainer >
                <LinkItem><CustomLink 
                    onClick={() => customLinkTo('/')} >About me</CustomLink></LinkItem>
                <LinkItem><CustomLink 
                    onClick={() => customLinkTo('/background')} >Background</CustomLink></LinkItem>
                <LinkItem><CustomLink 
                    onClick={() => customLinkTo('/toolkit')} >Toolkit</CustomLink></LinkItem>
                <LinkItem><CustomLink 
                    onClick={() => customLinkTo('/works')} >Works</CustomLink></LinkItem>
                <LinkItem><CustomLink 
                    onClick={() => customLinkTo('/contact')} >Contact</CustomLink></LinkItem>
            </LinksContainer>
        </Nav>
    )
}

const LinkItem = styled.li`
    width: max-content;
`

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

const CustomLink = styled.button`
    text-decoration: none;
    border: none;
    background: none;
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

    &:hover, &:focus {
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

    
    @media only screen and (max-width: 1440px) {
        font-size: 18px;
        &:after {
        }
    }
`


export default Navigation