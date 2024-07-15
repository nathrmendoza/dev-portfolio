import React from 'react'
import styled from 'styled-components';
import { WorkItemHeading } from '../styles/Typography';
import { getTheme } from '../styles/ThemeUtils';
import { Link } from 'react-router-dom';
import customNavigation from '../hooks/customNavigation';
import { ViewWorkCTA } from '../styles/Buttons';

const WorkItem = ({work}) => {
    const {
        name,
        slug,
        thumbnail
    } = work;

    const customLinkTo = customNavigation();

  return (
    <SlideWrapper>
        <ImageContainer>
            <Image src={thumbnail} alt={`${name} Thumbnail`} />
        </ImageContainer>
        <HoverContainer>
            <HoverHeading>{name}</HoverHeading>
            <CustomViewWorkCTA onClick={() => customLinkTo(`/works/${slug}`)}>View Work</CustomViewWorkCTA>
        </HoverContainer>
    </SlideWrapper>
  )
}

const HoverHeading = styled(WorkItemHeading)`
    color: #FFFFFF!important;
    @media only screen and (max-width: 1080px) {
        font-size: 36px;
    }

	@media only screen and (max-width: 940px) {
		font-size: 32px;
		margin: 0 0 30px;
	}
`

const CustomViewWorkCTA = styled(ViewWorkCTA)`
    color: #FFF!important;
    &:after {
        background-color: #FFF!important;
    }
`

const SlideWrapper = styled.div`
    margin: 0 31px;
    position: relative;
    @media only screen and (max-width: 940px) {
        margin: 0 20px;
    }
`

const ImageContainer = styled.div`
    border: 10px solid ${getTheme('borderColor')};
    @media only screen and (max-width: 640px) {
        border-width: 5px;
    }
`

const Image = styled.img`
    aspect-ratio: 769 / 499;
    max-width: 768px;
    width: 100%;
    height: auto;
    position: relative;
    display: block;
    user-select: none;

    @media only screen and (max-width: 1080px) {
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        max-width: 65vw;
    }
    @media only screen and (max-width: 640px) {
        max-width: 100%;
    }
`

const HoverContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(54,54,54,0.75);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.6, 0.01, 0.05, 0.95);
    padding: 24px;

    &:hover, &:focus {
        opacity: 1;
    }
`

export default WorkItem