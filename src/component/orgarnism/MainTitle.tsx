import { styled } from "styled-components";
import Title from "../atoms/title/Title";

const PaddingTitle = styled(Title)`
    margin-bottom: 2.5rem;
    padding: 1rem 2rem;
    // border-bottom: .2rem solid #ddd;
`

const MainTitle:React.FC = () => {
    return (
        <PaddingTitle>
            통장관리 프로그램 v0.1.0
        </PaddingTitle>
    )
}

export default MainTitle;