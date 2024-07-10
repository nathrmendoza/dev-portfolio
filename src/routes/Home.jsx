import {useState, useEffect} from "react"

import { HeroHeading } from "../styles/Typography";
import TextTransition, { presets } from 'react-text-transition'
import { MainContainer } from "../styles/ThemeContainers";
import PageAnimWrapper from "../utils/PageAnimWrapper";

const HEROTEXT = ['signer', 'veloper', 'v Ops', '_dust'];

const Home = () => {  const [textIndex, setTextIndex] = useState(0);
  
    //text change
    useEffect(() => {
      const intervalId = setInterval(() => setTextIndex(index => index + 1), 3000);
      return () => clearTimeout(intervalId);
    }, [])

    return (
        <PageAnimWrapper>
            <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <HeroHeading style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>Nath the De<TextTransition springConfig={presets.gentle}>{HEROTEXT[textIndex % HEROTEXT.length]}</TextTransition></HeroHeading>
            </MainContainer>
        </PageAnimWrapper>
    )
}

export default Home