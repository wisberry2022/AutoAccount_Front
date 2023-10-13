import { styled } from "styled-components";
import Emphasize from "./Emphasize";
import { Scale } from "../../../types/StyleTypes";

const CustomSizingEmphasize = styled(Emphasize)<{size:Scale}>`
  padding: ${prop => prop.size && prop.size.padding};
  margin: ${prop => prop.size && prop.size.margin};
  width: ${prop => prop.size && prop.size.width + "rem"};
  height: ${prop => prop.size && prop.size.height + "rem"};
`;

export {CustomSizingEmphasize}

const EllipsisEmphasize = styled(Emphasize)<{size:Scale}>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: ${prop => prop.size ? prop.size.width + "rem" : "10rem"};
  height: 2rem;
  line-height: 100%;
`;

export {EllipsisEmphasize};