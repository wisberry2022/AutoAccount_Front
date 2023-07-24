import { styled } from "styled-components";
import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import { HorizonFlex, VerticalFlex } from "../atoms/div/StyledFlex";
import LabelInput from "../molecules/LabelInput";
import { LabelInputPair } from "../../classes/types/DataTypes";
import ButtonBox from "../molecules/ButtonBox";
import SectionHead from "../molecules/SectionHead";
import ModifyBox from "../molecules/ModifyBox";

const VerticalSizingFlex = styled(VerticalFlex)`
  width: 100%;
`;

const HorizonSizingFlex = styled(HorizonFlex)`
  border: .1rem solid #aaa;
  padding: 1.5rem 1rem;
  width: 100%;
`

const AssignArea:React.FC = () => {
 
  const option:FlexSet = {
    gap: "1.5"
  };
 
  const dataArr:LabelInputPair[] = [
    {
      id:1, 
      label:{
        htmlFor: "serial",
        label: "계좌번호"
      },
      input:{
        id: "serial",
        name: "serial",
        type: "text",
        placeholder: "계좌번호를 입력하세요"
      }
    },
    {
      id:2, 
      label:{
        htmlFor: "name",
        label: "계좌이름"
      },
      input:{
        id: "name",
        name: "name",
        type: "text",
        placeholder: "계좌이름을 입력하세요"
      }
    },
    {
      id:3, 
      label:{
        htmlFor: "owner",
        label: "계좌주"
      },
      input:{
        id: "owner",
        name: "owner",
        type: "text",
        placeholder: "계좌주를 입력하세요"
      }
    },
    {
      id:4, 
      label:{
        htmlFor: "balance",
        label: "계좌잔액"
      },
      input:{
        id: "balance",
        name: "balance",
        type: "text",
        placeholder: "계좌잔액을 입력하세요"
      }
    }
  ];



  return (
    <VerticalSizingFlex option={option}>
      <HorizonSizingFlex option={{justifyContent:"center", gap:"15"}}>
        <SectionHead title="내 계좌 등록하기" btn="계좌 등록하기" />
      </HorizonSizingFlex>
      <ModifyBox dataArr={dataArr} />
    </VerticalSizingFlex>
  )
}

export default AssignArea;