import styled from "styled-components"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

import { FullPageWrapper } from "../styles/ThemeContainers"
import { Paragraph, SectionHeading } from "../styles/Typography"
import PageAnimWrapper from "../utils/PageAnimWrapper"

import { NarrowWrapper } from "../styles/ThemeContainers"
import WorkItem from "../components/WorkItem"
import CustomSliderNav from "../components/CustomSliderNav"
import { useRef, useState } from "react"
import { getTheme } from "../styles/ThemeUtils"

const worksData = [
    {
        name: "The Laika Shop",
        thumbnail: "assets/images/laika-thumb.jpg",
        description: "Built a Shopify theme for Laika, a film animation studio. Utilized Shopiy liquid, Sass and Javascript alongside JQuery for the build.",
        siteLink: "https://shop.laika.com/",
        primaryColor: "#FFFFFF",
        textColor: "#000000",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "Liquid",
                iconName: "FaShopify"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Webpack",
                iconName: "SiWebpack"
            },
            {
                label: "Shopify",
                iconName: "FaShopify"
            }
        ],
        photos:["laika-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "Cobram Estate Olive Oil",
        thumbnail: "assets/images/cobram-thumb.jpg",
        description: "Built and managed a Shopify store for Cobram Estate Olive Oil. Built the theme, managed/configured complex solutions for subscriptions, built some internal apps using remix.",
        siteLink: "https://cobramestate.com.au/",
        primaryColor: "#EDCB7B",
        textColor: "#202023",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "Liquid",
                iconName: "FaShopify"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "React",
                iconName: "FaReact"
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
                label: "CSS",
                iconName: "FaCss3"
            },
            {
                label: "Sass",
                iconName: "FaSass"
            },
            {
                label: "Webpack",
                iconName: "SiWebpack"
            },
            {
                label: "Shopify",
                iconName: "FaShopify"
            }
        ],
        photos:["cobram-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "Bruce Insurance",
        thumbnail: "assets/images/bruce-thumb.jpg",
        description: "Built a Wordpress site for an Australian insurance company, tech used was Php, Sass and Javascript with Jquery.",
        siteLink: "https://www.bruce.com.au/",
        primaryColor: "#4C8FCD",
        textColor: "#FFFFFF",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "PHP",
                iconName: "SiPhp"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Webpack",
                iconName: "SiWebpack"
            },
            {
                label: "Wordpress",
                iconName: "FaWordpress"
            }
        ],
        photos:["bruce-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "Wild Kiwihearts",
        thumbnail: "assets/images/wkhearts-thumb.jpg",
        description: "Built a Shopify store for an New Zealand cosmetic company, tech used was Liquid, Sass and Javascript with Jquery.",
        siteLink: "https://wildkiwihearts.com/",
        primaryColor: "#355755",
        textColor: "#FFFFFF",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "Liquid",
                iconName: "FaShopify"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Webpack",
                iconName: "SiWebpack"
            },
            {
                label: "Shopify",
                iconName: "FaShopify"
            }
        ],
        photos:["wkhearts-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "Core Energy Belt",
        thumbnail: "assets/images/cebelt-thumb.jpg",
        description: "Built a Shopify store for an international baseball, golf and softball belts supplier, tech used was Liquid, Sass and Javascript with Jquery.",
        siteLink: "https://coreenergybelt.com/",
        primaryColor: "#B6987D",
        textColor: "#FFFFFF",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "Liquid",
                iconName: "FaShopify"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Webpack",
                iconName: "SiWebpack"
            },
            {
                label: "Shopify",
                iconName: "FaShopify"
            }
        ],
        photos:["cebelt-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "WSCC",
        thumbnail: "assets/images/wscc-thumb.jpg",
        description: "Collaborated building a Craft CMS site for a Washington based catholic conference. Site was built with Craft which used twig templating also utilized Sass and Javascript.",
        siteLink: "https://www.wacatholics.org/",
        primaryColor: "#0075F2",
        textColor: "#FFFFFF",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "PHP",
                iconName: "SiPhp"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Gulp.js",
                iconName: "FaGulp"
            },
            {
                label: "Craft CMS",
                iconName: "SiCraftcms"
            }
        ],
        photos:["wscc-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "Sta. Lucia Land Inc.",
        thumbnail: "assets/images/sli-thumb.jpg",
        description: "Built a Wordpress site for a real estate company in the Philippines. Site utilized Php, Sass and Javascript along with jQuery.",
        siteLink: "https://stalucialand.com.ph/",
        primaryColor: "#0D4C33",
        textColor: "#FFFFFF",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "PHP",
                iconName: "SiPhp"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Webpack",
                iconName: "SiWebpack"
            },
            {
                label: "Wordpress",
                iconName: "FaWordpress"
            }
        ],
        photos:["sli-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "Cadent TV",
        thumbnail: "assets/images/cadent-thumb.jpg",
        description: "Collaborated building a Wordpress site for a tv advertising company in New York. Site utilized Php, Sass and Javascript along with jQuery.",
        siteLink: "https://cadent.tv/insights/",
        primaryColor: "#23EBF0",
        textColor: "#000000",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "PHP",
                iconName: "SiPhp"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Webpack",
                iconName: "SiWebpack"
            },
            {
                label: "Wordpress",
                iconName: "FaWordpress"
            }
        ],
        photos:["cadent-full.jpg"],
        mobilePhotos: []
    },
    {
        name: "Sapporo Products",
        thumbnail: "assets/images/sapp-thumb.jpg",
        description: "Built a Wordpress site for a manufacturer and distributor of vermicelli. Site utilized Php, Sass and Javascript along with jQuery.",
        siteLink: "https://sapporoproducts.com/",
        primaryColor: "#36A0E0",
        textColor: "#FFFFFF",
        techStack: [
            {
                label: "HTML",
                iconName: "FaHtml5"
            },
            {
                label: "PHP",
                iconName: "SiPhp"
            },
            {
                label: "Javascript",
                iconName: "SiJavascript"
            },
            {
                label: "jQuery",
                iconName: "SiJquery"
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
                label: "Gulp.js",
                iconName: "FaGulp"
            },
            {
                label: "Wordpress",
                iconName: "FaWordpress"
            }
        ],
        photos:["sapp-full.jpg"],
        mobilePhotos: []
    }
]

const Works = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    
    const sliderRef = useRef();
    const prevBtnRef = useRef();
    const nextBtnRef = useRef();

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        waitForAnimate: false,
        cssEase: 'cubic-bezier(0.6, 0.01, 0.05, 0.95)',
        variableWidth: true,
        autoplay: isDragging ? false : true,
        autoplaySpeed: 4000,
        nextArrow: nextBtnRef.current,
        prevArrow: prevBtnRef.current,
        beforeChange: (curSlide, nextSlide) => {
            //for autoplay, reflects changes to slider nav
            setCurrentSlide(nextSlide);
        }
    }

    //pauses slider autoplay when dragging nav
    const navDraggingHandler = (check) => {
        if (check === false) {
            sliderRef.current.slickPlay();
        } else {
            sliderRef.current.slickPause();
        }
    }

    const updateSlider = (index) => {
        sliderRef.current.slickGoTo(index);
        setCurrentSlide(index);
    }

    return (
        <PageAnimWrapper>
            <TextWrapper>
                <SectionHeading style={{marginBottom: '42px'}}>Works</SectionHeading>
                <Paragraph>I've listed below some of the projects I've made throughout my career as a developer.</Paragraph>
            </TextWrapper>
            <FullPageWrapper>
                <Slider ref={sliderRef} {...sliderSettings}>
                    {worksData.map(work => <WorkItem key={work.name} work={work}/>)}
                </Slider>
                <NavWrapper>
                    <CustomSliderButtons onClick={e => {
                        e.preventDefault();
                        if (currentSlide === 0) {
                            updateSlider(worksData.length - 1);
                        } else {
                            updateSlider(currentSlide - 1);
                        }
                    }}>
                        <FiChevronsLeft/>
                    </CustomSliderButtons>
                    <CustomSliderNav 
                        maxSlides={worksData.length} 
                        currentSlide={currentSlide}
                        updateSliderFunc={updateSlider}    
                        dragCheckFunc={navDraggingHandler}
                    />
                    <CustomSliderButtons  onClick={e => {
                        e.preventDefault();
                        if (currentSlide === worksData.length - 1) {
                            updateSlider(0);
                        } else {
                            updateSlider(currentSlide + 1);
                        }
                    }}>
                        <FiChevronsRight/>
                    </CustomSliderButtons>
                </NavWrapper>
            </FullPageWrapper>
        </PageAnimWrapper>
    )
}

const TextWrapper = styled(NarrowWrapper)`
    padding: 72px 0;
`

const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 42px auto 24px;
`

const CustomSliderButtons = styled.button`
    border: none;
    background: none;
    display: inline-block;
    padding: 0;

    svg {
        width: 36px;
        height: auto;
        color: ${getTheme('trackColor')};
    }
    &:hover svg {
        color: ${getTheme('thumbColor')};
    }
`

export default Works