import { styled } from "styled-components";
import { ButtonSet, FlexSet } from "../../classes/types/StyleTypes";
import Emphasize from "../atoms/Text/Emphasize";
import { HorizonFlex, VerticalFlex } from "../atoms/div/StyledFlex";
import Button from "../atoms/buttons/Button";
import LabelInput from "../molecules/LabelInput";
import { LabelInputPair } from "../../classes/types/DataTypes";
import ButtonBox from "../molecules/ButtonBox";

const VerticalSizingFlex = styled(VerticalFlex)`
  width: 100%;
`;

const VerticalMarginFlex = styled(VerticalFlex)`
  margin-bottom: 1.5rem;
`

const InputSizingFlex = styled(VerticalFlex)`
  border: .1rem solid #aaa;
  padding: 2rem 1rem;
  width: 100%;
`;

const HorizonSizingFlex = styled(HorizonFlex)`
  border: .1rem solid #aaa;
  padding: 1.5rem 1rem;
  width: 100%;
`

const SizingButton = styled(Button)`
  width: 14rem;
`;

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

  const buttons:ButtonSet[] = [
    {color:{bgColor: "#000", color: "#fff"}, name:"등록"},
    {color:{bgColor: "#fff", color: "#000"}, name:"취소"}
  ];

  return (
    <VerticalSizingFlex option={option}>
      <HorizonSizingFlex option={{justifyContent:"center", gap:"15"}}>
        <Emphasize font={{fontSize:"1.8"}}>내 계좌 등록하기</Emphasize>
        <SizingButton color="BW">계좌 등록하기</SizingButton>
      </HorizonSizingFlex>
      <InputSizingFlex>
        <VerticalMarginFlex>
        {
          dataArr.map(val => {
            return (
              <LabelInput key={val.id} label={val.label} input={val.input} />
            )
          })
        }
        </VerticalMarginFlex>
        <ButtonBox gap={.5} names={buttons} />
      </InputSizingFlex>
    </VerticalSizingFlex>
  )
}

export default AssignArea;