import styled from "styled-components";
import { Paragraph } from "../styles/Typography";
import { getTheme } from "../styles/ThemeUtils";
import { motion } from "framer-motion";


const biVariants = {
    initial: (orient) => ({
        opacity: 0,
        x: orient === 'right' ? 50 : -50
    }),
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6
        }
    }
}

const BackgroundItem = ({work, orient, startAnimation}) => {
    const {date, description} = work;

    return (
        <BIRow $orient={orient}>
            <BIInner $orient={orient}>
                <motion.div
                    variants={biVariants}
                    initial="initial"
                    whileInView={startAnimation ? "animate" : ""}
                    viewport={{
                        once: true
                    }}
                    custom={orient} >
                    <DateText>{date}</DateText>
                    <Paragraph>{description}</Paragraph>
                </motion.div>
            </BIInner>
        </BIRow>
    )
}

const BIRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.$orient === 'right' ? 'flex-end' : 'flex-start'};

    @media only screen and (max-width: 940px) {
        padding-left: 12px;
    }
`

const BIInner = styled.div`
    width: 50%;
    padding-${props => props.$orient === 'right' ? 'left' : 'right'}: 93px;
    position: relative;
    text-align: ${props => props.$orient === 'right' ? 'left' : 'right'};
    min-height: 320px;
        
	@media only screen and (max-width: 1080px) {
		min-height: 280px;
        padding-${props => props.$orient === 'right' ? 'left' : 'right'}: 48px;
	}
        
    @media only screen and (max-width: 940px) {
        width: 100%;
        padding-left: 48px;
        padding-right: 0;
        text-align: left;
        min-height: 240px;
        padding-bottom: 40px;
    }

    @media only screen and (max-width: 480px) {
        padding-left: 36px;
    }

    &:before {
        content: '';
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: ${getTheme('mainColor')};
        position: absolute;
        top: 12px;
        ${props => props.$orient === 'right' ? 'left' : 'right'}: -18px;
        transition: background-color 0.6s ease-out;

        @media only screen and (max-width: 1080px) {
            width: 26px;
            height: 26px;
            ${props => props.$orient === 'right' ? 'left' : 'right'}: -13px;
        }
        @media only screen and (max-width: 940px) {
            top: 9px;
            left: -13px;
        }
    }

    &:after {
        content: '';
        width: 4px;
        height: calc(100% - 48px - 48px);
        position: absolute;
        bottom: 24px;
        ${props => props.$orient === 'right' ? 'left' : 'right'}: -2px;
        background: ${getTheme('mainColor')};
        display: inline-block;
        @media only screen and (max-width: 940px) {
            left: -2px;
        }
    }
`

const DateText = styled.h4`
    font-family: ${getTheme('serif')};
    font-size: 42px;
    line-height: 1;
    font-weight: 700;
    font-style: italic;
    color: ${getTheme('mainColor')};
    margin-bottom: 24px;
    
	@media only screen and (max-width: 1080px) {
		font-size: 36px;
        margin-bottom: 12px
	}
	@media only screen and (max-width: 480px) {
		font-size: 32px;
        margin-bottom: 12px
	}
`

export default BackgroundItem