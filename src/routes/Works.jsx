import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Works = () => {
    return (
        <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <PageAnimWrapper>
                <HeroHeading>Works</HeroHeading>
            </PageAnimWrapper>
        </MainContainer>
    )
}

export default Works