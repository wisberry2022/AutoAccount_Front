import { styled } from "styled-components";
import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import { HorizonFlex, VerticalFlex } from "../atoms/div/StyledFlex";
import { LabelInputPair } from "../../classes/types/DataTypes";
import SectionHead from "../molecules/SectionHead";
import ModalFrame from "../../pages/modal/ModalFrame";
import {  useRecoilValue } from "recoil";
import { DefaultModalButtons, getInputComponent } from "../../recoil/state/DefaultState";
import ModifyBox from "../molecules/ModifyBox";
import useModalState from "../../hooks/recoil/useModalState";

const VerticalSizingFlex = styled(VerticalFlex)`
  width: 100%;
`;

const HorizonSizingFlex = styled(HorizonFlex)`
  border: .1rem solid #aaa;
  padding: 1.5rem 1rem;
  width: 100%;
`

const AssignArea:React.FC = () => {
  const [ACCOUNT_ASSIGN, setState] = useModalState('isAccountAssign');

  const dataArr:LabelInputPair[] = [
    useRecoilValue(getInputComponent('serial')),
    useRecoilValue(getInputComponent('name')),
    useRecoilValue(getInputComponent('balance')),
    useRecoilValue(getInputComponent('owner'))
  ];

  const buttons:ButtonSet[] = useRecoilValue(DefaultModalButtons);

  const option:FlexSet = {
    gap: "1.5"
  };


  return (
    <VerticalSizingFlex option={option}>
      <HorizonSizingFlex option={{justifyContent:"center", gap:"15"}}>
        <SectionHead title="내 계좌 등록하기" btn="계좌 등록하기" />
      </HorizonSizingFlex>
      {
        ACCOUNT_ASSIGN && 
        <ModalFrame title="내 계좌 등록하기 " target={<ModifyBox dataArr={dataArr} buttonArr={buttons} />} />
      }
      
    </VerticalSizingFlex>
  )
}

export default AssignArea;