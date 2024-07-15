import styled from "styled-components";
import { getTheme } from "./ThemeUtils";

export const HeroHeading = styled.h1`
  font-family: ${getTheme('serif')};
  font-size: 128px;
  line-height: 1;
  font-style: italic;
  font-weight: 600;
  color: ${getTheme('mainColor')};
  text-shadow: ${getTheme('textShadowD')};
  text-align: center;
  transition: margin 0.3s ease-in-out;
  
  @media only screen and (max-width: 1440px) {
	font-size: 94px;
  }
  @media only screen and (max-width: 1080px) {
	font-size: 86px;
  }
  @media only screen and (max-width: 940px) {
	font-size: 64px;
	margin-bottom: 30px!important;
  }
  @media only screen and (max-width: 640px) {
	font-size: 48px;
  }
  @media only screen and (max-width: 480px) {
	font-size: 36px;
	margin-bottom: 24px!important;
  }
`

export const SectionHeading = styled.h2`
	font-family: ${getTheme('serif')};
	font-size: 96px;
	line-height: 1;
	font-style: italic;
	font-weight: 600;
	color: ${getTheme('mainColor')};
	text-shadow: ${getTheme('textShadowD')};
	text-align: center;
	margin: 0 0 31px;

	@media only screen and (max-width: 1440px) {
		font-size: 64px;
	}
	@media only screen and (max-width: 1080px) {
		font-size: 48px;
		margin-bottom: 24px!important;
	}
	@media only screen and (max-width: 480px) {
		font-size: 42px;
	}
`

export const WorkItemHeading = styled.h3`
	font-family: ${getTheme('serif')};
	color: ${getTheme('mainColor')};
	font-size: 64px;
	line-height: 1;
	font-style: italic;
	font-weight: 600;
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	text-align: center;
	margin: 0 0 56px;
	
    @media only screen and (max-width: 1440px) {
        font-size: 48px;
		margin: 0 0 40px;
    }

	@media only screen and (max-width: 940px) {
		font-size: 42px;
		margin: 0 0 30px;
	}
`

export const Paragraph = styled.p`
	font-family: ${getTheme('sansSerif')};
	font-size: 24px;
	line-height: 42px;
	font-style: normal;
	font-weight: 400;
	color: ${getTheme('mainColor')};
	margin: 0 0 24px;
	
	@media only screen and (max-width: 1440px) {
		font-size: 18px;
		line-height: 36px
	}
	@media only screen and (max-width: 640px) {
		font-size: 16px;
		line-height: 32px;
	}
`