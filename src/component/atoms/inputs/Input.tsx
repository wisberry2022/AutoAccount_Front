import { styled } from "styled-components"

const Input = styled.input.attrs((prop:any) => ({
  type: prop.type,
  name: prop.name,
  id: prop.id,
  placeholder: prop.placeholder,
}))`
  width: 10rem;
`;

export default Input;

