import { styled } from "styled-components";
import Item from "../atoms/list/Item";
import { GapFlex } from "../atoms/div/StyledFlex";
import Button from "../atoms/buttons/Button";
import { ButtonSet, FontSet } from "../../classes/types/StyleTypes";
import useModalState from "../../hooks/recoil/useModalState";
import ModalFrame from "../../pages/modal/ModalFrame";
import ModifyBox from "./ModifyBox";
import { LabelInputPair } from "../../classes/types/DataTypes";
import { useRecoilState, useRecoilValue } from "recoil";
import { ModifyModalButtons, getInputComponent } from "../../recoil/state/DefaultState";
import AlertFrame from "../../pages/modal/AlertFrame";
import { EllipsisEmphasize } from "../atoms/Text/StyledEmphasize";
import { UserClickedAccount } from "../../recoil/state/AccountState";
import { FlagState } from "../../recoil/state/FlagState";
import { CSSByThemeType } from "../../classes/types/RecoilStateTypes";
import ThemeSelector from "../../recoil/selector/ThemeSelector";

const ThemeFlexItem = styled(Item)<{gap:number, theme:CSSByThemeType}>`
  outline: ${prop => prop.theme.outline};
  display: flex;
  align-items: center;
  gap: ${prop => prop.gap + "rem"};
  padding: 2rem 1rem;
  width: 40rem;
;`

type PropType = {
  serial: string
  name: string
  id: string
}

const MyAccountBundle:React.FC<PropType> = ({id, serial, name}:PropType) => {
  const themeObj = useRecoilValue(ThemeSelector);
  const [_, setState] = useModalState('isAccountDetail');
  const [update, setUpdate] = useModalState('isAccountUpdate');
  const [remove, setRemove] = useModalState('isAccountDelete');
  const [clicked, setClicked] = useRecoilState(UserClickedAccount);
  const [dataModifyFlag, setFlag] = useRecoilState(FlagState);

  const inputDatas:LabelInputPair[] = [
    useRecoilValue(getInputComponent('nameForUpdate'))
  ];

  const buttons:ButtonSet[] = useRecoilValue(ModifyModalButtons);
  const font:FontSet = {fontSize:"1.7", fontWeight:"600"}

  return (
    <ThemeFlexItem gap={2} theme={themeObj}>
      <GapFlex onClick={() => (setState('isAccountDetail'), setClicked({id:Number.parseInt(id), clicked:name, serial:serial}))} gap={1}>
        <EllipsisEmphasize size={{width: "15"}} font={font}>{serial}</EllipsisEmphasize>
        <EllipsisEmphasize size={{width: "7"}} font={{fontSize:"1.1", fontWeight: "400"}}>{name}</EllipsisEmphasize>
      </GapFlex>
      <GapFlex gap={.5}>
        <Button color="BW" onClick={(e) => {
          e.stopPropagation();
          setFlag({id:Number.parseInt(id), clicked:name, serial:serial});
          setUpdate('isAccountUpdate');
        }}>수정</Button>
        <Button color="WB" onClick={(e) => {
          e.stopPropagation();
          setFlag({id:Number.parseInt(id), clicked:name, serial:serial});
          setRemove('isAccountDelete');
        }}>삭제</Button>
      </GapFlex>
      {
        update &&
        <ModalFrame title="내 계좌 수정하기" target={<ModifyBox dataArr={inputDatas} buttonArr={buttons} />} />
      }
      {
        remove &&
        <AlertFrame title="정말 계좌를 삭제하시겠습니까?" />
      }
    </ThemeFlexItem>
  )
}

export default MyAccountBundle;