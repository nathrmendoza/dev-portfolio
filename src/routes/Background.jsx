import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Background = () => {
    return (
        <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <PageAnimWrapper>
                <HeroHeading>Background</HeroHeading>
            </PageAnimWrapper>
        </MainContainer>
    )
}

export default Background