import styled from "styled-components"
import { MainContainer, LargeWrapper } from "../styles/ThemeContainers"
import { SectionHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"
import BackgroundItem from "../components/BackgroundItem"
import MultiDot from '../assets/multidot.svg?react';

const worksData = [
    {
        date: "2016",
        description: "Enrolled in a BS program in Entertainment and Multimedia Computing at CIIT College of Arts and Technology, Philippines."
    },
    {
        date: "Mid 2019",
        description: "Completed an internship at University of the Philippines Diliman, College of Social Science and Philosophy, focusing on managing the CSSP school portal."
    },
    {
        date: "2019 - 2021",
        description: "Worked as a front-end developer at Optimind Technology Solutions, focusing on projects for clients in the Philippines and Hong Kong. Responsibilities included website development, ad banners, and email templates. Additionally, led and assisted other front-end developers in adhering to industry standards."
    },
    {
        date: "2021 - 2024",
        description: "Joined Sonnet Digital as a front-end developer, collaborating with clients from Australia, New Zealand, and the U.S. Developed various web applications, including informational websites, school portals, ecommerce sites, and internal tools."
    }
]

const Background = ({themeColor}) => {
    const MultiDotElement = styled(MultiDot)`
        position: absolute;
        left: 50%;
        bottom: 48px;
        transform: translateX(-50%) ${themeColor === 'dark' ? 'rotate(180deg)' : 'rotate(0)'};
    `

    return (
        <MainContainer>
            <PageAnimWrapper>
                <InnerWrapper>    
                    <SectionHeading style={{marginBottom: '42px'}}>Background</SectionHeading>
                    {worksData.map((work, index) => <BackgroundItem key={index} work={work} orient={index % 2 === 0 ? 'right' : 'left'}/>)}
                    <MultiDotElement />
                </InnerWrapper>
            </PageAnimWrapper>
        </MainContainer>
    )
}

const InnerWrapper = styled(LargeWrapper)`
    padding: 72px 0 124px;
    position: relative;
`

export default Background