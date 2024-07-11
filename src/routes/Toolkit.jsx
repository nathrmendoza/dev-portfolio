import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Toolkit = () => {
    return (
            <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <PageAnimWrapper>
                    <HeroHeading>Toolkit</HeroHeading>
                </PageAnimWrapper>
            </MainContainer>
    )
}

export default Toolkit