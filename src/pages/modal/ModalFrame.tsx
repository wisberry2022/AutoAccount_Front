import { styled } from "styled-components";
import Button from "../../component/atoms/buttons/Button";
import { VerticalModalFlex } from "../../component/atoms/div/StyledFlex"
import { ModalTitle } from "../../component/atoms/title/TitleStyle"
import useModalState from "../../hooks/recoil/useModalState";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import { useRecoilValue } from "recoil";
import { ThemeState } from "../../recoil/state/ThemeState";
import { CSSByThemeType, ThemeType } from "../../classes/types/RecoilStateTypes";
import ThemeSelector from "../../recoil/selector/ThemeSelector";

type PropType = {
    title?: string;
    close?: boolean;
    target: React.ReactElement;
}

const MarginTopButton = styled(Button)`
  margin-top: 1rem;
`

const ThemeVerticalModalFlex = styled(VerticalModalFlex)<{theme:CSSByThemeType}>`
  background-color: ${prop => prop.theme.bgColor};
  color: ${prop => prop.theme.color};
`

const ModalFrame:React.FC<PropType> = ({title, close, target}:PropType) => {
  const themeObj = useRecoilValue(ThemeSelector);  
  const [_, setState] = useModalState('isAccountDetail');
  const current = useFindCurrentModal();
  
  return (
    <ThemeVerticalModalFlex theme={themeObj}>
      <ModalTitle title={title ? title : "수정하기"} />
      {target}
      {
        close && 
        <MarginTopButton onClick={() => setState(current)} color="BW">확인</MarginTopButton>}
    </ThemeVerticalModalFlex>
  )
}

export default ModalFrame;