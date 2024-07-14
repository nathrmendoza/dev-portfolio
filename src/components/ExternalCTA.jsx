import styled from "styled-components";
import { getTheme } from "../styles/ThemeUtils";

const ExternalCTA = ({ link, children, theme }) => {
    
    const themeColor = theme === 'dark' ? {
        primary: '#FFFFFF',
        secondary: '#DEDEDE',
        tertiary: '#C6C6C6'
    } : {
        primary: '#363636',
        secondary: '#545454',
        tertiary: '#6F6F6F'
    };

    return (
        <LinkWrapper href={link} target="_blank" rel="noopener noreferrer">
            <CirclesWrapper>
                <Circle className="circle" style={{backgroundColor: themeColor.tertiary}}></Circle>
                <Circle className="circle" style={{backgroundColor: themeColor.secondary}}></Circle>
                <Circle className="circle" style={{backgroundColor: themeColor.primary}}></Circle>
            </CirclesWrapper>
            {children}
        </LinkWrapper>
    )
}

const CirclesWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    margin-right: 12px;
`

const Circle = styled.i`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    transition: all 0.6s cubic-bezier(0.6, 0.01, 0.05, 0.95);
`

const LinkWrapper = styled.a`
    color: ${getTheme('mainColor')};
    transition: all 0.6s cubic-bezier(0.6, 0.01, 0.05, 0.95);
    padding-left: 24px;
    text-decoration: none;
    font-size: 24px;
    line-height: 1;
    font-family: ${getTheme('serif')};
    font-weight: 600;
    font-style: italic;
    position: relative;
    display: inline-block;
    margin-top: 32px;

    &:hover {
        padding-left: 56px;
        .circle {
            &:nth-child(2) {
                left: 18px;
            }
            &:first-child {
                left: 36px;
            }
        }
    }
`

export default ExternalCTA