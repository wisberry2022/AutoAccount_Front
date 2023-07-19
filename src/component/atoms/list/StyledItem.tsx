import { styled } from "styled-components";
import { Scale } from "../../../classes/types/StyleTypes";
import Item from "./Item";

const CustomSizingItem = styled(Item)<{size:Scale}>`
  padding: ${prop => prop.size && prop.size.padding};
  margin: ${prop => prop.size && prop.size.margin};
  width: ${prop => prop.size && prop.size.width + "rem"};
  height: ${prop => prop.size && prop.size.height + "rem"};
  font-size: 1.5rem;
`;

export {CustomSizingItem};