import styled from "styled-components"
import { MainNoHeight } from "../styles/ThemeContainers"
import ThumbsUp from '../assets/thumbs-up.svg?react'
import { getTheme } from "../styles/ThemeUtils"

const Footer = () => {
    return (
        <footer>
            <MainNoHeight>
                <FlexContainer>
                    <FooterMessage>Designed and Developed by Nath</FooterMessage>
                    <ThumbsUpLogo/>
                </FlexContainer>
            </MainNoHeight>
        </footer>
    )
}

export default Footer

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px 0 42px;
`

const FooterMessage = styled.p`
    display: inline-block;
    font-family: ${getTheme('serif')};
    color: ${getTheme('mainColor')};
    font-size: 18px;
    line-height: 24px;
    font-style: italic;
    font-weight: 700;
`
const ThumbsUpLogo = styled(ThumbsUp)`
    transition: all 0.3s ease-in-out;
    margin-left: 4px;

    path {
        fill: ${getTheme('mainColor')};
    }
    &:hover {
        transform: rotate(25deg);
    }
`