import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Background = () => {
    return (
        <PageAnimWrapper>
        <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <HeroHeading>Background</HeroHeading>
        </MainContainer>
        </PageAnimWrapper>
    )
}

export default Background