import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import worksData from '../temp/worksData.json'
import WorksPageAnimWrapper from '../utils/WorksPageAnimWrapper';
import { NarrowWrapper } from '../styles/ThemeContainers';
import { WorkItemHeading } from '../styles/Typography';
import styled from 'styled-components';

const WorksSingle = ({updateThemeFunc}) => {

    const { slug } = useParams();
    const [work, setWork] = useState({});

    const {
        name = '',
        thumbnail = '',
        description = '',
        siteLink = '',
        primaryColor = '',
        theme = '',
        techStach = [],
        photos = [],
        mobilePhotos = []
    } = work
    
    useEffect(() => {
        const filteredWork = worksData.filter(work => work.slug === slug);
        setWork(filteredWork[0])
    }, [slug])

    useEffect(() => {
        updateThemeFunc(theme);
    }, [work])



    return (
        <WorksPageAnimWrapper mainColor={primaryColor}>
            <ContentWrapper>
                <WorkItemHeading style={{color: theme === 'light' ? '#363636' : '#FFFFFF'}}>{name}</WorkItemHeading>
                <FullImage src={window.location.origin + `/${photos[0]}`} />
            </ContentWrapper>
        </WorksPageAnimWrapper>
    )
}

const ContentWrapper = styled(NarrowWrapper)`
    padding: 72px 0 124px;
`
const FullImage = styled.img`
    width: 100%;
    display: block;
`

export default WorksSingle