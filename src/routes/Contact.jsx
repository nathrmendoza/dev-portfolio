import { MainContainer } from "../styles/ThemeContainers"
import { HeroHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

const Contact = () => {
    return (
            <MainContainer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <PageAnimWrapper>
                    <HeroHeading>Contact</HeroHeading>
                </PageAnimWrapper>
            </MainContainer>
    )
}

export default Contact