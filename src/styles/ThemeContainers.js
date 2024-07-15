import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    padding: 0 56px;
    margin: 0 auto;
    min-height: calc(100vh - 155px - 72px);

    @media only screen and (max-width: 1080px) {
        padding: 0 16px;
        min-height: calc(100vh - 102.84px - 130px);
    }
`

export const FullPageWrapper = styled.div`
    width: 100%;
    max-width: 100%;
`

export const LargeWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const MediumWrapper = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
`

export const NarrowWrapper = styled.div`
    width: 100%;
    max-width: 995px;
    margin: 0 auto;
`

export const MainNoHeight = styled.div`
    width: 100%;
    max-width: 1920px;
    padding: 0 56px;
    margin: 0 auto;

    @media only screen and (max-width: 1080px) {
        padding: 0 16px;
    }
`