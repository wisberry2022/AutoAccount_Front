import { styled } from "styled-components";
import { FontSet } from "../../../types/StyleTypes";

const Label = styled.label.attrs((prop:any) => ({
  htmlFor:prop.htmlFor
}))<{font:FontSet}>`
  font-size: ${prop => prop.font && prop.font.fontSize + "rem"};
  font-weight: ${prop => prop.font && prop.font.fontWeight};
  letter-spacing: ${prop => prop.font && prop.font.letterSpacing};
  line-height: ${prop => prop.font.lineHeight ? prop.font.lineHeight : "2"};
`;

export default Label;