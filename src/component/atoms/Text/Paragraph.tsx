import { styled } from "styled-components";
import { FontSet } from "../../../types/StyleTypes";

const Paragraph = styled.p<{font?:FontSet}>`
  font-size: ${prop => prop.font?.fontSize ? prop.font.fontSize + "rem" : "1.3rem"};
  font-weight: ${prop => prop.font?.fontWeight && prop.font.fontWeight};
  letter-spacing: ${prop => prop.font?.letterSpacing && prop.font.letterSpacing};
  line-height: ${prop => prop.font?.lineHeight && prop.font.lineHeight};
`;

export default Paragraph;