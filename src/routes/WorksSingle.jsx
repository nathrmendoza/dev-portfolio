import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import worksData from '../temp/worksData.json'
import WorksPageAnimWrapper from '../utils/WorksPageAnimWrapper';
import { NarrowWrapper } from '../styles/ThemeContainers';
import { Paragraph, WorkItemHeading } from '../styles/Typography';
import styled from 'styled-components';
import ExternalCTA from '../components/ExternalCTA';
import { getTheme } from '../styles/ThemeUtils';
import ToolItem from '../components/ToolItem';
import FeaturedImage from '../components/FeaturedImage';
import { ViewWorkCTA } from '../styles/Buttons';
import customNavigation from '../hooks/customNavigation';

const WorksSingle = ({updateThemeFunc}) => {

    const { slug } = useParams();
    const [work, setWork] = useState({});

    const customLinkTo = customNavigation();

    const {
        name = '',
        description = '',
        siteLink = '',
        primaryColor = '',
        theme = '',
        techStack = [],
        photos = [],
    } = work
    
    useEffect(() => {
        const filteredWork = worksData.filter(work => work.slug === slug);
        setWork(filteredWork[0])
    }, [slug])

    useEffect(() => {
        updateThemeFunc(theme);
    }, [work]);

    return (
        <>
        <WorksPageAnimWrapper mainColor={primaryColor}>
            <ContentWrapper className='content-wrapper'>
                <NarrowWrapper style={{padding: '0 16px'}}>
                    <WorkItemHeading>{name}</WorkItemHeading>
                    <Paragraph style={{marginBottom: 0}}>
                        {description}
                    </Paragraph>
                    <ExternalCTA link={siteLink} theme={theme}>View Site</ExternalCTA>

                    <TechHeading>Tech Stack</TechHeading>
                    <TechRow>    
                        {techStack.map(tech => <ToolItem key={tech.label} className="toolItem" tool={tech} />)}
                    </TechRow>

                    <FeaturedImage imagePath={window.location.origin + `/${photos[0]}`} width={995} alt={name + ' Featured Photo'} themeColor={primaryColor}/>

                    <ViewWorkCTA style={{marginTop: '72px', left: '50%', transform: 'translateX(-50%)'}} onClick={() => customLinkTo('/works')}>Back to Works</ViewWorkCTA>
                </NarrowWrapper>
            </ContentWrapper>
        </WorksPageAnimWrapper>
        </>
    )
}

const ContentWrapper = styled.div`
    padding: 72px 0 0;
    width: 100%;
    
    @media only screen and (max-width: 1440px) {
        padding: 40px 0 0;
    }
`

const TechHeading = styled.h4`
    display: block;
    font-size: 40px;
    line-height: 1;
    margin: 72px 0 42px;
    font-family: ${getTheme('serif')};
    color: ${getTheme('mainColor')};
    font-style: italic;
    font-weight: 600;
    
    @media only screen and (max-width: 1440px) {
        font-size: 32px;
    }
`

const TechRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    .toolItem {
        width: 20%;
        @media only screen and (max-width: 940px) {
            width: 33.333%;
        }
        @media only screen and (max-width: 640px) {
            width: 50%;
        }
    }
`

export default WorksSingle