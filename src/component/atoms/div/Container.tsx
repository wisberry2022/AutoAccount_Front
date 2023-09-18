import styled from "styled-components";
import { CSSByThemeType } from "../../../classes/types/RecoilStateTypes";

const ThemeContainer = styled.div<{theme:CSSByThemeType}>`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: ${prop => prop.theme.bgColor};
  color: ${prop => prop.theme.color};
`; 

export default ThemeContainer