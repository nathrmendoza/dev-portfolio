import {useState, useEffect} from "react"
import styled from "styled-components";

import { HeroHeading, Paragraph } from "../styles/Typography";
import TextTransition, { presets } from 'react-text-transition'
import { MainContainer, MediumWrapper } from "../styles/ThemeContainers";
import PageAnimWrapper from "../utils/PageAnimWrapper";

const HEROTEXT = ['signer', 'veloper', 'v Ops', '_dust'];

const Home = () => {  const [textIndex, setTextIndex] = useState(0);
  
    //text change
    useEffect(() => {
      const intervalId = setInterval(() => setTextIndex(index => index + 1), 3000);
      return () => clearTimeout(intervalId);
    }, [])

    return (
        <MainContainer>
            <PageAnimWrapper>
                <MediumWrapper>
                    <CustomHeroHeading>Nath the De<TextTransition springConfig={presets.gentle}>{HEROTEXT[textIndex % HEROTEXT.length]}</TextTransition></CustomHeroHeading>
                    <Paragraph style={{textAlign: 'center'}}>
                        Hey there, I'm Nathaniel Mendoza, or just Nath for short, a front‑end developer located in Rolleston, New Zealand. My expertise lies in crafting web applications that provide digital services, ranging in complexity. I thrive on the challenge of constructing projects from scratch and enjoy finding inventive/unique solutions to problems along the way.
                    </Paragraph>
                </MediumWrapper>
            </PageAnimWrapper>
        </MainContainer>
    )
}

export default Home

const CustomHeroHeading = styled(HeroHeading)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 56px;
`