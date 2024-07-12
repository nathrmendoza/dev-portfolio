import React from 'react'
import styled from 'styled-components';
import { WorkItemHeading } from '../styles/Typography';
import { getTheme } from '../styles/ThemeUtils';
import { Link } from 'react-router-dom';
import customNavigation from '../hooks/customNavigation';

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
            <WorkItemHeading>{name}</WorkItemHeading>
            <ViewWorkCTA onClick={() => customLinkTo(`/works/${slug}`)}>View Work</ViewWorkCTA>
        </HoverContainer>
    </SlideWrapper>
  )
}

const SlideWrapper = styled.div`
    margin: 0 31px;
    position: relative;
`

const ImageContainer = styled.div`
    border: 10px solid ${getTheme('borderColor')};
`

const Image = styled.img`
    aspect-ratio: 769 / 499;
    max-width: 768px;
    width: 100%;
    height: auto;
    position: relative;
    display: block;
    user-select: none;
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

    &:hover {
        opacity: 1;
    }
`

const ViewWorkCTA = styled.button`
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

export default WorkItem