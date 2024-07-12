import styled from "styled-components"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

import { FullPageWrapper } from "../styles/ThemeContainers"
import { Paragraph, SectionHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

import { NarrowWrapper } from "../styles/ThemeContainers"
import WorkItem from "../components/WorkItem"
import CustomSliderNav from "../components/CustomSliderNav"
import { useRef, useState } from "react"
import { getTheme } from "../styles/ThemeUtils"

import worksData from '../temp/worksData.json'

const Works = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const sliderRef = useRef();
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        waitForAnimate: false,
        cssEase: 'cubic-bezier(0.6, 0.01, 0.05, 0.95)',
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: nextBtnRef.current,
        prevArrow: prevBtnRef.current,
        beforeChange: (curSlide, nextSlide) => {
            //for autoplay, reflects changes to slider nav
            setCurrentSlide(nextSlide);
        }
    }

    //pauses slider autoplay when dragging nav
    const navDraggingHandler = (check) => {
        if (check === false) {
            sliderRef.current.slickPlay();
        } else {
            sliderRef.current.slickPause();
        }
    }

    const updateSlider = (index) => {
        sliderRef.current.slickGoTo(index);
        setCurrentSlide(index);
    }

    return (
        <PageAnimWrapper>
            <TextWrapper>
                <SectionHeading style={{marginBottom: '42px'}}>Works</SectionHeading>
                <Paragraph>I've listed below some of the projects I've made throughout my career as a developer.</Paragraph>
            </TextWrapper>
            <FullPageWrapper>
                <Slider ref={sliderRef} {...sliderSettings}>
                    {worksData.map(work => <WorkItem key={work.name} work={work}/>)}
                </Slider>
                <NavWrapper>
                    <CustomSliderButtons onClick={e => {
                        e.preventDefault();
                        if (currentSlide === 0) {
                            updateSlider(worksData.length - 1);
                        } else {
                            updateSlider(currentSlide - 1);
                        }
                    }}>
                        <FiChevronsLeft/>
                    </CustomSliderButtons>
                    <CustomSliderNav 
                        maxSlides={worksData.length} 
                        currentSlide={currentSlide}
                        updateSliderFunc={updateSlider}    
                        dragCheckFunc={navDraggingHandler}
                    />
                    <CustomSliderButtons  onClick={e => {
                        e.preventDefault();
                        if (currentSlide === worksData.length - 1) {
                            updateSlider(0);
                        } else {
                            updateSlider(currentSlide + 1);
                        }
                    }}>
                        <FiChevronsRight/>
                    </CustomSliderButtons>
                </NavWrapper>
            </FullPageWrapper>
        </PageAnimWrapper>
    )
}

const TextWrapper = styled(NarrowWrapper)`
    padding: 72px 0;
`

const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 42px auto 24px;
`

const CustomSliderButtons = styled.button`
    border: none;
    background: none;
    display: inline-block;
    padding: 0;

    svg {
        width: 36px;
        height: auto;
        color: ${getTheme('trackColor')};
    }
    &:hover svg {
        color: ${getTheme('thumbColor')};
    }
`

export default Works