import { styled } from "styled-components";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import { LabelInputPair } from "../../classes/types/DataTypes";
import LabelInput from "./LabelInput";
import ButtonBox from "./ButtonBox";
import { ButtonSet } from "../../classes/types/StyleTypes";

const VerticalMarginFlex = styled(VerticalFlex)`
  margin-bottom: 1.5rem;
`

const InputSizingFlex = styled(VerticalFlex)`
  border: .1rem solid #aaa;
  padding: 2rem 1rem;
  width: 100%;
`;

type PropType = {
	dataArr?: LabelInputPair[];
}

const ModifyBox:React.FC<PropType> = ({dataArr}:PropType) => {
	const buttons:ButtonSet[] = [
    {color:{bgColor: "#000", color: "#fff"}, name:"등록"},
    {color:{bgColor: "#fff", color: "#000"}, name:"취소"}
  ];
	
	return (
		<InputSizingFlex>
		<VerticalMarginFlex>
		{
			dataArr?.map(val => {
				return (
					<LabelInput key={val.id} label={val.label} input={val.input} />
				)
			})
		}
		</VerticalMarginFlex>
		<ButtonBox gap={.5} names={buttons} />
	</InputSizingFlex>
	)
}

export default ModifyBox;