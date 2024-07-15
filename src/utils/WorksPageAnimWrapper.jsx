import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { MainContainer } from '../styles/ThemeContainers'

const circleBackgroundVariants = {
    initial: {
        scale: 0, 
        opacity: 0,
        x: '-50%',
        y: '-50%',
        width: 1,
        height: 1
    },
    animate: {
        scale: 1, 
        x: '-50%',
        y: '-50%',
        opacity: 1,
        width: '300vh',
        height: '300vh',
        transition: {
            duration: 3,
            ease: [0.6, 0.01, 0.05, 0.95]
        }
    },
    final: {
        scale: 0,
        opacity: 0,
        width: 0,
        height: 0,
        x: '-50%',
        y: '-50%',
        transition: {
            duration: 1,
            delay: 0.4
        }
    }   
}

const innerWrapperVariants = {
    initial: {opacity: 0, y: 50},
    animate: {opacity: 1, y: 0,
        transition: {
            duration: 1.6,
            ease: [0.6, 0.01, 0.05, 0.95], 
            delay: 1
        }
    },
    final: {opacity: 0, y: -50,
        transition: {
            duration: 0.6
        }
    },
}

const WorksPageAnimWrapper = ({children, mainColor}) => {
  return (
    <>
    <CircleBackground
        variants={circleBackgroundVariants}
        initial="initial"
        animate="animate"
        exit="final"
        style={{
            backgroundColor: mainColor
        }}
    />
    <motion.div
        variants={innerWrapperVariants}
        initial="initial"
        animate="animate"
        exit="final"
        style={{zIndex: 1, position: 'relative'}} >
        {children}
    </motion.div>
    </>
  )
}

const CircleBackground = styled(motion.div)`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 100%;
`

export default WorksPageAnimWrapper