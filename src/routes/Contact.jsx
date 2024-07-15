import styled from "styled-components"
import { MainContainer, NarrowWrapper } from "../styles/ThemeContainers"
import { Paragraph, SectionHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"
import { getTheme } from "../styles/ThemeUtils"
import { useState } from "react"
import emailjs from '@emailjs/browser'

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/ReactToastify.css'

import PaperPlane from '../assets/paper-plane.svg?react'
import { ViewWorkCTA } from "../styles/Buttons"

import { motion } from "framer-motion"


const Contact = () => {

    const [loading, setLoading] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = e => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_qudp8rf', 'template_zc3b8ar', formData, {
            publicKey: 'CE7pUwdvNKG1677bm'
        }).then(
            () => {
                setLoading(false);
                setFormSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            },
            err => {
                toast.error('Error occured submitting the form.');
                console.error(err);
            }
        );
    }

    return (
        <>
        <ToastContainer position="top-right" autoClose={6000} hideProgressBar={false} newestOnTop={true} pauseOnHover theme="colored"/>
        <MainContainer>
            <PageAnimWrapper>
                <InnerWrapper>
                    <SectionHeading style={{marginBottom: '42px'}}>Contact</SectionHeading>
                    {!formSuccess 
                        ? <>
                        <Paragraph style={{textAlign: 'center'}}>
                        If you're interested in the work I do, feel free to reach out thru this form. Alternatively, you could also get in touch with my social accounts.
                        </Paragraph>
                        <FormWrapper onSubmit={handleFormSubmit} disabled={loading}>
                            {loading && 
                                <LoadingWrapper>
                                    <LoadText>Please wait</LoadText>
                                    <LoadIcon>
                                        <i></i>
                                        <i></i>
                                    </LoadIcon>
                                </LoadingWrapper>
                            }
                            <TwoColumn>
                                <Input type="text" name="name" placeholder="Enter a Name" onChange={handleInputChange}/>
                            </TwoColumn>
                            <TwoColumn>
                                <Input type="email" name="email" placeholder="Enter an Email" required onChange={handleInputChange}/>
                            </TwoColumn>
                            <OneColumn>
                                <Input type="text" name="subject" placeholder="The Subject" required onChange={handleInputChange}/>
                            </OneColumn>
                            <OneColumn>
                                <TextArea name="message" placeholder="Your Message" required onChange={handleInputChange}/>
                            </OneColumn>
                            <SubmitButton type="submit">Send Message</SubmitButton>
                        </FormWrapper>
                        </>
                        :
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    ease: [0.165, 0.84, 0.44, 1],
                                    duration: 0.6
                                }
                            }}
                        >
                            <PaperPlaneLogo/>
                            <SuccessHeading>Message Sent!</SuccessHeading>
                            <Paragraph style={{textAlign: 'center'}}>
                            Thank you for reaching out, I’ll be in touch as soon as possible.
                            </Paragraph>
                        </motion.div>
                    }
                </InnerWrapper>
            </PageAnimWrapper>
        </MainContainer>
        </>
    )
}

const InnerWrapper = styled(NarrowWrapper)`
    padding: 72px 0 124px;
    position: relative;
    
    @media only screen and (max-width: 1440px) {
        padding: 40px 0 60px;
    }
`

const LoadingWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: -36px;
    left: 0;
`
const LoadText = styled.span`
    font-size: 24px;
    line-height: 1;
    font-family: ${getTheme('serif')};
    color: ${getTheme('mainColor')};
    font-style: italic;
    font-weight: 600;
    
	@media only screen and (max-width: 1440px) {
		font-size: 18px;
		line-height: 36px
	}
	@media only screen and (max-width: 640px) {
		font-size: 16px;
		line-height: 32px;
	}
`

const LoadIcon = styled.div`
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    transform-origin: center;
    animation: rotating 1s linear infinite;
    margin-left: 10px;

    i {
        width: 6.5px;
        height: 6.5px;
        border-radius: 100%;
        background-color: ${getTheme('mainColor')};
        display: inline-block;
        position: absolute;

        &:first-child {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        &:last-child {
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`

const PaperPlaneLogo = styled(PaperPlane)`
    margin: 100px auto 36px;
    display: block;
    path {    
        fill: ${getTheme('mainColor')}!important;
    }
`

const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    margin-top: 56px;
    position: relative;

    &:disabled {
        pointer-events: none;
        opacity: 0.5;

        input, textarea {
            pointer-events: none;
        }
    }
`

const SubmitButton = styled(ViewWorkCTA)`
    display: inline-block;
    margin: 24px auto 0;
    color: ${getTheme('mainColor')};

    &:after {
        background-color: ${getTheme('mainColor')};
    }
`

const SuccessHeading = styled.h4`
    color: ${getTheme('mainColor')};
    font-family: ${getTheme('serif')};
    font-size: 36px;
    line-height: 1;
    font-style: italic;
    font-weight: 600;
    text-align: center;
    margin: 0 0 26px;
`

const OneColumn = styled.div`
    width: 100%;
`

const TwoColumn = styled.div`
    width: calc(50% - 10px);
`

const Input = styled.input`
    width: 100%;
    padding: 15px 24px;
    background: #FFF;
    box-shadow: inset 0 4px 10px 0 rgba(0,0,0,0.25);
    font-family: ${getTheme('sansSerif')};
    font-size: 24px;
    line-height: 1;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    border: none;
    
    @media only screen and (max-width: 1440px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
`
const TextArea = styled.textarea`
    width: 100%;
    padding: 15px 24px;
    background: #FFF;
    box-shadow: inset 0 4px 10px 0 rgba(0,0,0,0.25);
    font-family: ${getTheme('sansSerif')};
    font-size: 24px;
    line-height: 1;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    border: none;
    resize: none;
    height: 240px;
    
    @media only screen and (max-width: 1440px) {
        font-size: 18px;
    }
`

export default Contact