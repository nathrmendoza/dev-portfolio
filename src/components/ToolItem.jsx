import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import styled from 'styled-components'
import { getTheme } from '../styles/ThemeUtils'

const iconSets = {
    Fa: FaIcons,
    Si: SiIcons
}

const ToolItem = ({tool}) => {
    const {label, iconName} = tool;
    const prefix = iconName.slice(0, 2);
    const IconComponent = iconSets[prefix]?.[iconName];

    return (
        <ToolItemWrapper>
            <IconComponent/>
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
    }
`
const ToolLabel = styled.p`
    font-family: ${getTheme('sansSerif')};
    color: ${getTheme('mainColor')};
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    margin: 0;
`

export default ToolItem