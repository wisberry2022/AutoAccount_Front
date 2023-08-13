import { styled } from "styled-components";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import { LabelInputPair } from "../../classes/types/DataTypes";
import LabelInput from "./LabelInput";
import ButtonBox from "./ButtonBox";
import { ButtonSet } from "../../classes/types/StyleTypes";

const VerticalMarginFlex = styled(VerticalFlex)`
  margin-bottom: 2.5rem;
`

const InputSizingFlex = styled(VerticalFlex)`
  padding: 1rem 0;
  width: 100%;
  background-color: #fff;
`;

type PropType = {
	dataArr: LabelInputPair[];
	buttonArr: ButtonSet[];
}

const ModifyBox:React.FC<PropType> = ({dataArr, buttonArr}:PropType) => {
	
	return (
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
			<ButtonBox gap={.5} names={buttonArr} />
	</InputSizingFlex>
	)
}

export default ModifyBox;