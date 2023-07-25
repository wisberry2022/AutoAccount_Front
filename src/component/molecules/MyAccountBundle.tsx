import { styled } from "styled-components";
import Item from "../atoms/list/Item";
import { GapFlex } from "../atoms/div/StyledFlex";
import Emphasize from "../atoms/Text/Emphasize";
import Button from "../atoms/buttons/Button";
import { FontSet } from "../../classes/types/StyleTypes";

const FlexItem = styled(Item)<{gap:number}>`
  outline: 1px solid #111;
  display: flex;
  align-items: center;
  gap: ${prop => prop.gap + "rem"};
  padding: 2rem 1rem;
;`

type PropType = {
  serial: string
  name: string
}

const MyAccountBundle:React.FC<PropType> = ({serial, name}:PropType) => {
  const font:FontSet = {fontSize:"1.7", fontWeight:"600"}
  const subFont:FontSet = {fontSize:"1.1", fontWeight: "400"};
  return (
    <FlexItem gap={8}>
      <GapFlex gap={1}>
        <Emphasize font={font}>{serial}</Emphasize>
        <Emphasize font={subFont}>{name}</Emphasize>
      </GapFlex>
      <GapFlex gap={1}>
        <Button color="BW">수정</Button>
        <Button color="WB">삭제</Button>
      </GapFlex>
    </FlexItem>
  )
}

export default MyAccountBundle;