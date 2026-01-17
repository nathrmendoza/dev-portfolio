import React from 'react'
import styled from 'styled-components'
import { getTheme } from '../styles/ThemeUtils'
import IconComponent from '../hooks/getIcon';


const SilverstripeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4,20.7a4.808,4.808,0,0,0,1.251-6.683l-3.963,2.712h0a2.4,2.4,0,0,1-2.712-3.971h0l3.621-2.479,2.324-1.593A4.808,4.808,0,0,0,15.168,2L11.2,4.72,5.259,8.784l-.008.008A7.212,7.212,0,0,0,13.4,20.7Z" fill="currentColor"/>
        <path d="M18.61,11.3h0a.107.107,0,0,0-.031.023l.031-.023a4.808,4.808,0,0,0-1.251,6.683l3.963-2.712h0a2.407,2.407,0,0,1,2.72,3.971l-3.621,2.479L18.09,23.317A4.808,4.808,0,0,0,16.838,30L20.8,27.288l5.945-4.072A7.213,7.213,0,0,0,18.61,11.3" fill="currentColor"/>
    </svg>
);

const ToolItem = ({tool, className}) => {
    const {label, iconName} = tool;

    return (
        <ToolItemWrapper className={className}>
            {iconName === 'silverstripe' ? <SilverstripeIcon /> : <IconComponent iconName={iconName}/>}
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