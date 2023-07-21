import { styled } from "styled-components";
import { Margin, Scale } from "../../../classes/types/StyleTypes";
import Item from "./Item";

const CustomSizingItem = styled(Item)<{size:Scale}>`
  padding: ${prop => prop.size && prop.size.padding};
  margin: ${prop => prop.size && prop.size.margin};
  width: ${prop => prop.size && prop.size.width + "rem"};
  height: ${prop => prop.size && prop.size.height + "rem"};
  font-size: 1.5rem;
`;

export {CustomSizingItem};

const MarginItem = styled(Item)<{margin:Margin}>`
  margin-top: ${prop => prop.margin.top && prop.margin.top + "rem"};
  margin-right: ${prop => prop.margin.right && prop.margin.right + "rem"};
  margin-bottom: ${prop => prop.margin.bottom && prop.margin.bottom + "rem"};
  margin-left: ${prop => prop.margin.left && prop.margin.left + "rem"};
`;

export {MarginItem};