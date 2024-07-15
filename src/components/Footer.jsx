import styled from "styled-components"
import { MainNoHeight } from "../styles/ThemeContainers"
import ThumbsUp from '../assets/thumbs-up.svg?react'
import { getTheme } from "../styles/ThemeUtils"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import customNavigation from "../hooks/customNavigation"

const pagePaths = [
    {
        label: 'About Me',
        path: '/'
    },
    {
      label: 'Background',
      path: '/background'
    },
    {
      label: 'Toolkit',
      path: '/toolkit'
    },
    {
      label: 'Works',
      path: '/works'
    },
    {
      label: 'Contact',
      path: '/contact'
    },
]

const Footer = ({isWorkSingle}) => {
    const { pathname } = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const [nextPage, setNextPage] = useState({
        label: '',
        path: '/'
    })

    const customLinkTo = customNavigation();

    useEffect(() => {

        const checkMobile = () => {
            if (window.innerWidth < 1081) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile)
    },[])

    useEffect(() => {
        switch (pathname) {
            case '/':
                setNextPage(pagePaths[1]);
                break;

            case '/background':
                setNextPage(pagePaths[2]);
                break;

            case '/toolkit':
                setNextPage(pagePaths[3]);
                break;

            case '/works':
                setNextPage(pagePaths[4]);
                break;

            case '/contact':
                setNextPage(pagePaths[0]);
                break;
        
            default:
                setNextPage(pagePaths[0]);
                break;
        }
    }, [pathname])
    
    return (
        <footer>
            <MainNoHeight>
                {isMobile && !isWorkSingle &&
                    <ChangePageLink onClick={e => {e.preventDefault(); customLinkTo(nextPage.path)}}>
                        To Next Page
                        <FloatingText>
                            {nextPage.label}
                        </FloatingText>
                    </ChangePageLink>
                }
                <FlexContainer>
                    <FooterMessage>Designed and Developed by Nath</FooterMessage>
                    <ThumbsUpLogo/>
                </FlexContainer>
            </MainNoHeight>
        </footer>
    )
}

export default Footer

const ChangePageLink = styled.button`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background: none;
    text-align:center;
    display: inlin-block;
    margin: 0 auto;
    transition: all 0.15s cubic-bezier(0.6, 0.01, 0.05, 0.95);

    font-size: 24px;
    line-height: 32px;
    font-family: ${getTheme('serif')};
    font-style: normal;
    font-weight: 600;
    color: ${getTheme('mainColor')};

    &:hover, &:focus {
        opacity: 0.75;
    }
`

const FloatingText = styled.span`
    display: block;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-family: ${getTheme('serif')};
    font-style: italic;
    font-weight: 600;
    color: ${getTheme('mainColor')};
    opacity: 0.75;
`

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0;
`

const FooterMessage = styled.p`
    display: inline-block;
    font-family: ${getTheme('serif')};
    color: ${getTheme('mainColor')};
    font-size: 18px;
    line-height: 24px;
    font-style: italic;
    font-weight: 700;

    @media only screen and (max-width: 640px) {
        font-size: 14px;
        line-height: 20px;
    }
`
const ThumbsUpLogo = styled(ThumbsUp)`
    transition: all 0.3s ease-in-out;
    margin-left: 4px;

    path {
        fill: ${getTheme('mainColor')};
    }
    &:hover, &:focus {
        transform: rotate(25deg);
    }
`