import styled from 'styled-components'
import { getTheme } from '../styles/ThemeUtils'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import clamp from 'lodash.clamp'

const CustomSliderNav = ({
    maxSlides, 
    currentSlide,
    updateSliderFunc,
    dragCheckFunc
}) => {

    const [position, setPosition] = useState(currentSlide * 70);
    const containerRef = useRef();

    const stops = [];
    for (let i = 0; i < maxSlides; i++) {
        stops.push(i * 70);
    }

    useEffect(() => {
        setPosition(currentSlide * 70);
    }, [currentSlide])

  return (
    <CSNavWrapper ref={containerRef}>
        <CSNavTrack $thumbWidth={70} $slideMax={maxSlides} 
            onClick={e => {
                e.preventDefault();
                if (!containerRef.current) return;
            }}
        />
        {stops.map((pos, index) =>
            <CSNavStops 
                key={index}
                style={{
                    left: `${pos}px`
                }}
                onClick={e => {
                    e.preventDefault();
                    updateSliderFunc(index);
                    setPosition(pos);
                }} 
            />
        )}
        <CSNavThumb $thumbWidth={70}
            initial={false}
            animate={{
                x: position
            }}
            transition={{
                type: "tween",
                ease: [0.165, 0.84, 0.44, 1],
                duration: 0.4
            }}
            onPointerDown={e => {
                const { ownerDocument } = e.currentTarget;
                dragCheckFunc(true);

                const onPointerMove = (e) => {
                    if (!containerRef.current) return;

                    const {width: containerWidth, left: containerLeft} = containerRef.current.getBoundingClientRect();

                    const segmentWidth = containerWidth / (stops.length - 1);
                    const index = Math.round((e.clientX - containerLeft) / segmentWidth);
                    const clampedIndex = clamp(index, 0, stops.length - 1);
    
                    updateSliderFunc(clampedIndex)
                }

                const onPointerUp = (e) => {
                    dragCheckFunc(false);
                    ownerDocument.removeEventListener('pointermove', onPointerMove);
                }

                ownerDocument.addEventListener('pointermove', onPointerMove);
                ownerDocument.addEventListener('pointerup', onPointerUp);
            }}
        />
    </CSNavWrapper>
  )
}

const CSNavWrapper = styled.div`
    position: relative;
    padding: 2px 0;
    margin-bottom: 4px;
`

const CSNavTrack = styled.div`
    width: ${props => (props.$thumbWidth * props.$slideMax)}px;
    height: 2px;
    background-color: ${getTheme('trackColor')};
`

const CSNavThumb = styled(motion.button)`
    width: ${props => (props.$thumbWidth)}px;
    height: 10px;
    background-color: ${getTheme('thumbColor')};
    position: absolute;
    top: calc(50% - 5px);
    z-index: 2;
    user-select: none;
    border: none;

    &:hover {
        height: 14px;
        top: calc(50% - 7px);
    }
`

const CSNavStops = styled.button`
    width: 70px;
    height: 10px;
    background: red;
    position: absolute;
    top: calc(50% - 5px);
    z-index: 1;
    user-select: none;
    border: none;
    outline: none;
    border-right: 1px solid white;
    opacity: 0;
`

export default CustomSliderNav