import { css, styled } from "styled-components";

const List = styled.ul<{debug?:boolean}>`
  ${prop => prop.debug && 
    css`
      outline: .1rem solid #000
    `};
    padding-inline-start: 0;
`

export default List;