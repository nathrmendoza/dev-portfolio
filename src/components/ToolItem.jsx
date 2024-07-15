import React from 'react'
import styled from 'styled-components'
import { getTheme } from '../styles/ThemeUtils'
import IconComponent from '../hooks/getIcon';

const ToolItem = ({tool, className}) => {
    const {label, iconName} = tool;

    return (
        <ToolItemWrapper className={className}>
            <IconComponent iconName={iconName}/>
            <ToolLabel>{label}</ToolLabel>
        </ToolItemWrapper>
    )
}

const ToolItemWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 32px;
    
    svg {
        width: 32px;
        height: auto;
        margin-right: 16px;
        color: ${getTheme('mainColor')};
        
        @media only screen and (max-width: 1440px) {
            width: 26px;
            height: auto;
        }
    }

`
const ToolLabel = styled.p`
    font-family: ${getTheme('sansSerif')};
    color: ${getTheme('mainColor')};
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin: 0;

    @media only screen and (max-width: 940px) {
        font-size: 16px;
    }
`

export default ToolItem