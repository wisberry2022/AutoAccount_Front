import { styled } from "styled-components";
import Emphasize from "./Emphasize";
import { Scale } from "../../../classes/types/StyleTypes";

const CustomSizingEmphasize = styled(Emphasize)<{size:Scale}>`
  padding: ${prop => prop.size && prop.size.padding};
  margin: ${prop => prop.size && prop.size.margin};
  width: ${prop => prop.size && prop.size.width + "rem"};
  height: ${prop => prop.size && prop.size.height + "rem"};
`;

export {CustomSizingEmphasize}