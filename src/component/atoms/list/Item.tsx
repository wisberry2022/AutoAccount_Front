import { css, styled } from "styled-components";

const Item = styled.li<{debug?:boolean}>`
  ${prop => prop.debug && 
    css`
      outline: .1rem solid #000
    `
  };
  line-height: 0;
`;

export default Item;