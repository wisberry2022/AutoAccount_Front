import { styled } from "styled-components";
import {ThemeObjectType} from "../../../types/ThemeType";

const Flex = styled.div<{ debug?: boolean, theme?:ThemeObjectType }>`
  outline: ${(prop) => prop.debug && ".1rem solid #000"};
  position: relative;
  display: flex;
  gap: 0.5rem;
	background-color: ${prop => prop.theme?.bgColor && prop.theme.bgColor}
`;

export default Flex;
