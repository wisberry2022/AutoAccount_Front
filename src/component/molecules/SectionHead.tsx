import { styled } from "styled-components";
import Emphasize from "../atoms/Text/Emphasize";
import Button from "../atoms/buttons/Button";
import useModalState from "../../hooks/recoil/useModalState";

const SizingButton = styled(Button)`
  width: 14rem;
`;

type PropType = {
  assignType: string
  title: string,
  btn: string,
}

const SectionHead:React.FC<PropType> = ({assignType, title, btn}:PropType) => {
  const [_, setModalState] = useModalState(assignType) 
  
  return (
   <>
    <Emphasize font={{fontSize:"1.8"}}>{title}</Emphasize>
    <SizingButton onClick={() => {setModalState(assignType)}} color="BW">계좌 등록하기</SizingButton>
   </>   
  )
}

export default SectionHead;