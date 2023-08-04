import { styled } from "styled-components";
import Item from "../atoms/list/Item";
import { GapFlex } from "../atoms/div/StyledFlex";
import Button from "../atoms/buttons/Button";
import { ButtonSet, FontSet } from "../../classes/types/StyleTypes";
import useModalState from "../../hooks/recoil/useModalState";
import ModalFrame from "../../pages/modal/ModalFrame";
import ModifyBox from "./ModifyBox";
import { LabelInputPair } from "../../classes/types/DataTypes";
import { useRecoilValue } from "recoil";
import { DefaultModalButtons, getInputComponent } from "../../recoil/state/DefaultState";
import AlertFrame from "../../pages/modal/AlertFrame";
import { EllipsisEmphasize } from "../atoms/Text/StyledEmphasize";
import { forwardRef, useRef } from "react";

const FlexItem = styled(Item)<{gap:number}>`
  outline: 1px solid #111;
  display: flex;
  align-items: center;
  gap: ${prop => prop.gap + "rem"};
  padding: 2rem 1rem;
  width: 40rem;
;`

type PropType = {
  serial: string
  name: string
}

const MyAccountBundle:React.FC<PropType> = ({serial, name}:PropType) => {
  const [_, setState] = useModalState('isAccountDetail');
  const [update, setUpdate] = useModalState('isAccountUpdate');
  const [remove, setRemove] = useModalState('isAccountDelete');

  const inputDatas:LabelInputPair[] = [
    useRecoilValue(getInputComponent('name'))
  ];

  const buttons:ButtonSet[] = useRecoilValue(DefaultModalButtons);

  const font:FontSet = {fontSize:"1.7", fontWeight:"600"}
  const subFont:FontSet = {fontSize:"1.1", fontWeight: "400"};
  
  return (
    <FlexItem gap={2}>
      <GapFlex onClick={() => setState('isAccountDetail')} gap={1}>
        <EllipsisEmphasize size={{width: "15"}} font={font}>{serial}</EllipsisEmphasize>
        <EllipsisEmphasize size={{width: "7"}} font={subFont}>{name}</EllipsisEmphasize>
      </GapFlex>
      <GapFlex gap={1}>
        <Button color="BW" onClick={() => setUpdate('isAccountUpdate')}>수정</Button>
        <Button color="WB" onClick={() => setRemove('isAccountDelete')}>삭제</Button>
      </GapFlex>
      {
        update &&
        <ModalFrame title="내 계좌 수정하기" target={<ModifyBox dataArr={inputDatas} buttonArr={buttons} />} />
      }
      {
        remove &&
        <AlertFrame title="정말 계좌를 삭제하시겠습니까?" />
      }
    </FlexItem>
  )
}

export default MyAccountBundle;