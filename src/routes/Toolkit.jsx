import styled from "styled-components"

import ToolItem from "../components/ToolItem"
import { MainContainer, NarrowWrapper } from "../styles/ThemeContainers"
import { SectionHeading, Paragraph } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const toolkitData = [
    [
        {
            label: "HTML",
            iconName: "FaHtml5"
        },
        {
            label: "Liquid",
            iconName: "FaShopify"
        },
        {
            label: "PHP",
            iconName: "SiPhp"
        },
        {
            label: "Laravel",
            iconName: "FaLaravel"
        },
        {
            label: "CSS",
            iconName: "FaCss3"
        },
        {
            label: "Sass",
            iconName: "FaSass"
        },
        {
            label: "Tailwind CSS",
            iconName: "SiTailwindcss"
        },
        {
            label: "Bootstrap",
            iconName: "FaBootstrap"
        },
        {
            label: "Styled Components",
            iconName: "SiStyledcomponents"
        }
    ],
    [
        {
            label: "Javascript",
            iconName: "SiJavascript"
        },
        {
            label: "Typescript",
            iconName: "SiTypescript"
        },
        {
            label: "React",
            iconName: "FaReact"
        },
        {
            label: "Redux",
            iconName: "SiRedux"
        },
        {
            label: "Next.js",
            iconName: "SiNextdotjs"
        },
        {
            label: "Remix.js",
            iconName: "SiRemix"
        },
        {
            label: "jQuery",
            iconName: "SiJquery"
        },
        {
            label: "Vite",
            iconName: "SiVite"
        },
        {
            label: "Webpack",
            iconName: "SiWebpack"
        },
        {
            label: "Gulp.js",
            iconName: "FaGulp"
        }
    ],
    [
        {
            label: "Wordpress",
            iconName: "FaWordpress"
        },
        {
            label: "Shopify",
            iconName: "FaShopify"
        },
        {
            label: "Craft CMS",
            iconName: "SiCraftcms"
        },
        {
            label: "Joomla",
            iconName: "FaJoomla"
        },
        {
            label: "Git",
            iconName: "FaGit"
        },
        {
            label: "Github",
            iconName: "FaGithub"
        },
        {
            label: "Bitbucket",
            iconName: "FaBitbucket"
        },
        {
            label: "Figma",
            iconName: "FaFigma"
        },
        {
            label: "Adobe XD",
            iconName: "SiAdobexd"
        },
        {
            label: "Adobe Photoshop",
            iconName: "SiAdobephotoshop"
        }
    ]
]

const toolPopVariants = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: (index) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.06 * (index + 1)
        }
    })
}

const Toolkit = () => {

    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const pageTransitionTimer = setTimeout(() => {
            setStartAnimation(true)
        }, 1000);

        return () => clearInterval(pageTransitionTimer);
    }, [])
    
    return (
            <MainContainer>
                <PageAnimWrapper>
                <InnerWrapper>
                <SectionHeading style={{marginBottom: '42px'}}>Toolkit</SectionHeading>
                    <Paragraph style={{textAlign: 'center'}}>
                    Below I've listed the technologies utilized in my projects. Gained proficiency using these tools through experience and interest in adapting to project quality standards. 
                    </Paragraph>
                        <FlexWrapper style={{marginTop: '56px'}}>
                            <ToolColumns>
                                { toolkitData[0].map((tool, index) => (
                                    <motion.li 
                                        key={tool.label}
                                        variants={toolPopVariants}
                                        initial="initial"
                                        animate={startAnimation ? "animate" : "initial"}
                                        custom={index}
                                    >
                                        <ToolItem tool={tool}/>
                                    </motion.li>
                                )) }
                            </ToolColumns>
                            <ToolColumns>
                                { toolkitData[1].map((tool, index) => (
                                    <motion.li 
                                        key={tool.label}
                                        variants={toolPopVariants}
                                        initial="initial"
                                        animate={startAnimation ? "animate" : "initial"}
                                        custom={index}
                                    >
                                        <ToolItem tool={tool}/>
                                    </motion.li>
                                )) }
                            </ToolColumns>
                            <ToolColumns className="full">
                                { toolkitData[2].map((tool, index) => (
                                    <motion.li 
                                        key={tool.label}
                                        variants={toolPopVariants}
                                        initial="initial"
                                        animate={startAnimation ? "animate" : "initial"}
                                        custom={index}
                                    >
                                        <ToolItem tool={tool}/>
                                    </motion.li>
                                )) }
                            </ToolColumns>
                        </FlexWrapper>
                </InnerWrapper>
                </PageAnimWrapper>
            </MainContainer>
    )
}

const InnerWrapper = styled(NarrowWrapper)`
    padding: 72px 0 124px;
    position: relative;
`

const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const ToolColumns = styled.ul`
    list-style: none;
    padding: 0;
    width: 50%;
    margin: 0 0 42px;
    display: flex;
    flex-wrap: wrap;
    & > li {
        width: 50%;
    }

    &.full {
        width: 100%!important;
        margin-bottom: 0!important;

        & > li {
            width: 25%;
        }
    }
`

export default Toolkit