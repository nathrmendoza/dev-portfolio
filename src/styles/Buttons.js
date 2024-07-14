import styled from "styled-components"
import { getTheme } from "./ThemeUtils"

export const ViewWorkCTA = styled.button`
    border: none;
    background: none;
    font-size: 32px;
    line-height: 1;
    font-weight: 500;
    font-style: italic;
    color: #FFF;
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: relative;
    transition: all 0.3s ease-out;
    padding-bottom: 36px;
    font-family: ${getTheme('serif')};

    &:after {
        content: '';
        width: 16px;
        height: 16px;
        background-color: #FFFFFF;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        transition: all 0.3s ease-out;
        border-radius: 100%;
        pointer-events: none;
    }

    &:hover {
        opacity: 0.75;
        &:after {
            transform: translateX(-50%) translateY(8px);
        }
    }
`