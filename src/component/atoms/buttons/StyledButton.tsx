import { styled } from "styled-components";
import Button from "./Button";
import { ColorSet } from "../../../classes/types/StyleTypes";

const CustomColoringButton = styled(Button)<{color:ColorSet}>`
  background-color: ${prop => prop.color && prop.color.bgColor};
  color: ${prop => prop.color && prop.color.color};
`;

export {CustomColoringButton};