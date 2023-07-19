import { styled } from "styled-components";
import { FontSet } from "../../../classes/types/StyleTypes";

const Label = styled.label.attrs((prop:any) => ({
  htmlFor:prop.htmlFor
}))<{font:FontSet}>`
  font-size: ${prop => prop.font && prop.font.fontSize + "rem"};
  font-weight: ${prop => prop.font && prop.font.fontWeight};
  letter-spacing: ${prop => prop.font && prop.font.letterSpacing};
  line-height: ${prop => prop.font && prop.font.lineHeight};
`;

export default Label;