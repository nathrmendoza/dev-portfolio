import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Works = () => {
    return (
        <PageAnimWrapper>
        <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <HeroHeading>Works</HeroHeading>
        </MainContainer>
        </PageAnimWrapper>
    )
}

export default Works