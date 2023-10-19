import { styled } from "styled-components";
import {ThemeObjectType} from "../../../types/ThemeType";

const NormalText = styled.strong<{theme?:ThemeObjectType}>`
  font-size: 1.5rem;
  font-weight: 400;
	color: ${prop => prop.theme?.color && prop.theme.color}
`;

export default NormalText;