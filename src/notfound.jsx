import { useRouteError } from "react-router-dom"
import styled from "styled-components";
import { MainContainer } from "./styles/ThemeContainers";
import { HeroHeading, Paragraph } from "./styles/Typography";

const NotFound = () => {
    const err = useRouteError();
    console.error(err);

    return (
        <PageContainer>
            <HeroHeading style={{marginBottom: '31px'}}>Oops!</HeroHeading>
            <Paragraph style={{ParagraphAlign: 'center'}}>Sorry, that page can't be found.</Paragraph>
        </PageContainer>
    )
}

const PageContainer = styled(MainContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default NotFound