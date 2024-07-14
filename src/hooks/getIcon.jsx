import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
const iconSets = {
    Fa: FaIcons,
    Si: SiIcons
}

const IconComponent = ({iconName}) => {
    const prefix = iconName.slice(0, 2);
    const IconComponent = iconSets[prefix]?.[iconName];
  
    return <IconComponent/>
}

export default IconComponent