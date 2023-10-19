import { styled } from "styled-components";
import {ThemeObjectType} from "../../../types/ThemeType";

const Title = styled.h1<{theme?:ThemeObjectType}>`
	font-size: 3rem;
  color: ${prop => prop.theme?.color && prop.theme.color}
`

export {Title};

const ThirdTitle = styled.h3<{theme?:ThemeObjectType}>`
	font-size: 2rem;
  color: ${prop => prop.theme?.color && prop.theme.color}
`

export {ThirdTitle};