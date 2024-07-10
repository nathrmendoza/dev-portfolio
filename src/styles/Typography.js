import styled from "styled-components";
import { getTheme } from "./ThemeUtils";

export const HeroHeading = styled.h1`
  font-family: ${getTheme('serif')};
  font-size: 128px;
  line-height: auto;
  font-style: italic;
  font-weight: 600;
  color: ${getTheme('mainColor')};
  text-shadow: ${getTheme('textShadowD')};
  text-align: center;
	transition: margin 0.3s ease-in-out;
`

export const SectionHeading = styled.h2`
	font-family: ${getTheme('serif')};
	font-size: 96px;
	line-height: auto;
	font-style: italic;
	font-weight: 600;
	color: ${getTheme('mainColor')};
	text-shadow: ${getTheme('textShadowD')};
	text-align: center;
	margin: 0 0 31px;
`

export const Paragraph = styled.p`
	font-family: ${getTheme('sansSerif')};
	font-size: 24px;
	line-height: 42px;
	font-style: normal;
	font-weight: 400;
	color: ${getTheme('mainColor')};
	margin: 0 0 24px;
`