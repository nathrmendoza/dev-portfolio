import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Contact = () => {
    return (
        <PageAnimWrapper>
            <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <HeroHeading>Contact</HeroHeading>
            </MainContainer>
        </PageAnimWrapper>
    )
}

export default Contact