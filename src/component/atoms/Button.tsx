import { styled } from "styled-components";

const DefaultButton = styled.button`
    padding: .5rem 2rem;
    width: 7rem;
    font-size: 1.3rem;
`;

const Button = (props:any):React.ReactElement => {
    return <DefaultButton>{props.label}</DefaultButton>
}

export default Button;