import { styled } from "styled-components";
import { Debit } from "../../classes/types/DataTypes";
import { FlexSet, FontSet, Margin } from "../../classes/types/StyleTypes";
import Emphasize from "../atoms/Text/Emphasize";
import Button from "../atoms/buttons/Button";
import { GapFlex, HorizonFlex, VerticalFlex } from "../atoms/div/StyledFlex";
import Item from "../atoms/list/Item";
import { MarginItem } from "../atoms/list/StyledItem";

const TextAlignEmphasize = styled(Emphasize)`
  text-align: left;
`

const AlignSelfButton = styled(Button)`
  align-self: center;
`;


type PropType = {
  data:Debit
}

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
    alignItems: "center"
  }

  const margin:Margin = {
    bottom: 3
  }
  return (
    <MarginItem margin={margin} debug={false}>
      <GapFlex gap={8} >
        <HorizonFlex option={horizonOption}>
          <VerticalFlex option={option}>
            <TextAlignEmphasize font={nameFont}>{data.name}</TextAlignEmphasize>
            <TextAlignEmphasize font={amountFont}>{data.amount}원</TextAlignEmphasize>
            <TextAlignEmphasize font={depositFont}>{data.deposit}</TextAlignEmphasize>
          </VerticalFlex>
          <Emphasize font={dateFont}>{data.debitDate}</Emphasize>
        </HorizonFlex>
        <GapFlex gap={.5}>
          <AlignSelfButton color="WB">수정</AlignSelfButton>
          <AlignSelfButton color="BW">삭제</AlignSelfButton>
        </GapFlex>        
      </GapFlex>
    </MarginItem>
  )
}

export default DebitBundle;