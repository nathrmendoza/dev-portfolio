import styled from "styled-components"
import { MainContainer, LargeWrapper } from "../styles/ThemeContainers"
import { SectionHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"
import BackgroundItem from "../components/BackgroundItem"
import MultiDot from '../assets/multidot.svg?react';
import { useEffect, useState } from "react"

const worksData = [
    {
        date: "2024 - present",
        description: "Currently a Web Developer at Imagic Creative Agency in Christchurch. Building and maintaining websites for clients within New Zealand."
    },
    {
        date: "2021 - 2024",
        description: "Joined Sonnet Digital as a front-end developer, working with clients from Australia, New Zealand, and the U.S to build their websites."
    },
    {
        date: "2019 - 2021",
        description: "Worked as a front-end developer at Optimind Technology Solutions, working on websites and ad banners for clients in the Philippines and Hong Kong."
    },
    {
        date: "Mid 2019",
        description: "Completed an internship at University of the Philippines Diliman, College of Social Science and Philosophy, focusing on managing the CSSP school portal."
    }
]

const Background = ({themeColor}) => {

    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const pageTransitionTimer = setTimeout(() => {
            setStartAnimation(true)
        }, 1000);

        return () => clearInterval(pageTransitionTimer);
    }, [])

    return (
        <MainContainer>
            <PageAnimWrapper>
                <InnerWrapper>    
                    <SectionHeading style={{marginBottom: '42px'}}>Background</SectionHeading>
                    {worksData.map((work, index) => <BackgroundItem key={index} work={work} orient={index % 2 === 0 ? 'right' : 'left'} startAnimation={startAnimation}/>)}
                    <MultiDotElement $themeColor={themeColor} />
                </InnerWrapper>
            </PageAnimWrapper>
        </MainContainer>
    )
}

const MultiDotElement = styled(MultiDot)`
    position: absolute;
    left: 50%;
    bottom: 48px;
    transform: translateX(-50%) ${props => (props.$themeColor === 'dark' ? 'rotate(180deg)' : 'rotate(0)')};
    @media only screen and (max-width: 940px) {
        left: 6px;
        transform: ${props => (props.$themeColor === 'dark' ? 'rotate(180deg)' : 'rotate(0)')};
    }
`

const InnerWrapper = styled(LargeWrapper)`
    padding: 72px 0 124px;
    position: relative;
    @media only screen and (max-width: 1440px) {
        padding: 40px 0 124px;
    }
`

export default Background