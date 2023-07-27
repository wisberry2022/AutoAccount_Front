import { styled } from "styled-components";
import Button from "../../component/atoms/buttons/Button";
import { VerticalModalFlex } from "../../component/atoms/div/StyledFlex"
import { ModalTitle } from "../../component/atoms/title/TitleStyle"
import useModalState from "../../hooks/recoil/useModalState";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";

type PropType = {
    title?: string;
    close?: boolean;
    target: React.ReactElement;
}

const MarginTopButton = styled(Button)`
  margin-top: 1rem;
`

const ModalFrame:React.FC<PropType> = ({title, close, target}:PropType) => {
    const [_, setState] = useModalState('isAccountDetail');
    const current = useFindCurrentModal();
  
    return (
      <VerticalModalFlex>
        <ModalTitle title={title ? title : "수정하기"} />
        {target}
        {
          close && 
          <MarginTopButton onClick={() => setState(current)} color="BW">확인</MarginTopButton>}
      </VerticalModalFlex>
    )
}

export default ModalFrame;