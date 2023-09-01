import { styled } from "styled-components";
import { Debit, LabelInputPair } from "../../classes/types/DataTypes";
import { ButtonSet, FlexSet, FontSet, Margin } from "../../classes/types/StyleTypes";
import Emphasize from "../atoms/Text/Emphasize";
import Button from "../atoms/buttons/Button";
import { GapFlex, HorizonFlex, VerticalFlex } from "../atoms/div/StyledFlex";
import { MarginItem } from "../atoms/list/StyledItem";
import useModalState from "../../hooks/recoil/useModalState";
import ModalFrame from "../../pages/modal/ModalFrame";
import ModifyBox from "./ModifyBox";
import { SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";
import { ModifyModalButtons, getInputComponent } from "../../recoil/state/DefaultState";
import AlertFrame from "../../pages/modal/AlertFrame";
import { DebitState } from "../../recoil/state/DebitState";
import { ClickedAccount } from "../../classes/types/RecoilStateTypes";

const PaddingItem = styled(MarginItem)`
  padding: 2rem 1.5rem;
  border: .1rem solid #aaa;
  `;

const TextAlignEmphasize = styled(Emphasize)`
  text-align: left;
  `

const AlignSelfButton = styled(Button)`
  align-self: center;
  `;

const CustomSizingHorizon = styled(HorizonFlex)`
  width: 25rem;
  `;

type PropType = {
  data:Debit
}

type setModalWorksFuncType = (modal:string) => void

const DebitBundle:React.FC<PropType> = ({data}:PropType) => {
  const font:FontSet = {
    lineHeight: "1"
  }
  
  const nameFont:FontSet = {
    ...font,
    fontSize: "1.2  ",
    fontWeight: "500"
  }
  
  const amountFont:FontSet = {
    ...font,
    fontSize: "2",
    fontWeight: "500"
  }

  const depositFont:FontSet = {
    ...font,
    fontSize: "1.5",
    fontWeight: "600"
  }

  const dateFont:FontSet = {
    ...font,
    fontSize: "1.5",
    fontWeight: "300"
  }

  const option:FlexSet = {
    alignItems: "justify-start",
  }

  const horizonOption:FlexSet = {
    gap: "3",
    justifyContent: "flex-start",
    alignItems: "center"
  }

  const margin:Margin = {
    bottom: 1.5,
  }

  const setDebitState:SetterOrUpdater<ClickedAccount> = useSetRecoilState(DebitState);

  const [DEBIT_UPDATE, setDebitUpdate] = useModalState('isDebitUpdate');
  const [DEBIT_DELETE, setDebitDelete] = useModalState('isDebitDelete');
  const [DEBIT_DETAIL, setDebitDetail] = useModalState('isDebitDetail');

  const dataArr:LabelInputPair[] = [
    useRecoilValue(getInputComponent('depositForUpdate')),
    useRecoilValue(getInputComponent('amount')),
    useRecoilValue(getInputComponent('name'))
  ];

  const buttons:ButtonSet[] = useRecoilValue(ModifyModalButtons);

  const setDebitWorks:setModalWorksFuncType = (modal:string) => (
    setDebitUpdate(modal),
    setDebitState(modal === "isDebitUpdate" ? {amount:data.amount, name:data.name, clicked:data.name, id:Number.parseInt(data.id), serial:data.deposit} : {clicked:data.name, id:Number.parseInt(data.id), serial:data.deposit})
  );


  return (
    <PaddingItem margin={margin}>
      <GapFlex gap={4} >
        <CustomSizingHorizon onClick={() => {
          setDebitDetail('isDebitDetail');
          setDebitState({clicked:data.name, id:Number.parseInt(data.id), serial:data.deposit});
        }} option={horizonOption}>
          <VerticalFlex option={option}>
            <TextAlignEmphasize font={nameFont}>{data.name}</TextAlignEmphasize>
            <TextAlignEmphasize font={amountFont}>{data.amount}원</TextAlignEmphasize>
            <TextAlignEmphasize font={depositFont}>{data.deposit}</TextAlignEmphasize>
          </VerticalFlex>
          <Emphasize font={dateFont}>{data.debitDate}</Emphasize>
        </CustomSizingHorizon>
        <GapFlex gap={.5}>
          <AlignSelfButton color="WB" onClick={() => setDebitWorks('isDebitUpdate')}>수정</AlignSelfButton>
          <AlignSelfButton color="BW" onClick={() => setDebitWorks('isDebitDelete')}>삭제</AlignSelfButton>
        </GapFlex>
        {
          DEBIT_UPDATE &&
         <ModalFrame title="자동이체 계좌 수정하기" target={<ModifyBox dataArr={dataArr} buttonArr={buttons} />} />
        }        
        {
          DEBIT_DELETE &&
          <AlertFrame title="정말 자동이체를 삭제하시겠습니까?"/>
        }
      </GapFlex>
    </PaddingItem>
  )
}

export default DebitBundle;