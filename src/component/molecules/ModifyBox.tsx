import { styled } from "styled-components";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import { LabelInputPair } from "../../classes/types/DataTypes";
import LabelInput from "./LabelInput";
import ButtonBox from "./ButtonBox";
import { ButtonSet } from "../../classes/types/StyleTypes";
import { CSSByThemeType, ThemeType } from "../../classes/types/RecoilStateTypes";
import { useRecoilValue } from "recoil";
import { ThemeState } from "../../recoil/state/ThemeState";
import ThemeSelector from "../../recoil/selector/ThemeSelector";

const VerticalMarginFlex = styled(VerticalFlex)`
  margin-bottom: 2.5rem;
`

const ThemeInputSizingFlex = styled(VerticalFlex)<{theme:CSSByThemeType}>`
  padding: 1rem 0;
  width: 100%;
	background-color: ${prop => prop.theme.bgColor};
  color: ${prop => prop.theme.color};
`;

type PropType = {
	dataArr: LabelInputPair[];
	buttonArr: ButtonSet[];
}

const ModifyBox:React.FC<PropType> = ({dataArr, buttonArr}:PropType) => {
	const themeObj = useRecoilValue(ThemeSelector);
	
	return (
		<ThemeInputSizingFlex theme={themeObj}>
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
	</ThemeInputSizingFlex>
	)
}

export default ModifyBox;