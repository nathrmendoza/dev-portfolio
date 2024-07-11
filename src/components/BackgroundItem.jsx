import styled from "styled-components";
import { Paragraph } from "../styles/Typography";
import { getTheme } from "../styles/ThemeUtils";

const BackgroundItem = ({work, orient}) => {
    const {date, description} = work;

    const BIRow = styled.div`
        width: 100%;
        display: flex;
        justify-content: ${orient === 'right' ? 'flex-end' : 'flex-start'}
    `

    const BIInner = styled.div`
        width: 50%;
        ${orient === 'right' ? 'padding-left: 93px' : 'padding-right: 93px'};
        position: relative;
        text-align: ${orient === 'right' ? 'left' : 'right'};
        min-height: 320px;

        &:before {
            content: '';
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: ${getTheme('mainColor')};
            position: absolute;
            top: 12px;
            ${orient === 'right' ? 'left: -18px;' : 'right: -18px'};
            transition: background-color 0.6s ease-out;
        }

        &:after {
            content: '';
            width: 4px;
            height: calc(100% - 48px - 48px);
            position: absolute;
            bottom: 24px;
            ${orient === 'right' ? 'left' : 'right'}: -2px;
            background: ${getTheme('mainColor')};
            display: inline-block;
        }
    `

    return (
        <BIRow>
            <BIInner>
                <DateText>{date}</DateText>
                <Paragraph>{description}</Paragraph>
            </BIInner>
        </BIRow>
    )
}

const DateText = styled.h4`
    font-family: ${getTheme('serif')};
    font-size: 42px;
    line-height: 1;
    font-weight: 700;
    font-style: italic;
    color: ${getTheme('mainColor')};
    margin-bottom: 24px;
`

export default BackgroundItem