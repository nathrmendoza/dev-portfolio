import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Toolkit = () => {
    return (
        <PageAnimWrapper>
        <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <HeroHeading>Toolkit</HeroHeading>
        </MainContainer>
        </PageAnimWrapper>
    )
}

export default Toolkit