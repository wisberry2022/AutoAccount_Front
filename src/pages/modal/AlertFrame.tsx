import styled from "styled-components";
import { ButtonSet } from "../../classes/types/StyleTypes";
import Paragraph from "../../component/atoms/Text/Paragraph";
import { VerticalModalFlex } from "../../component/atoms/div/StyledFlex";
import ButtonBox from "../../component/molecules/ButtonBox";
import { useRecoilValue } from "recoil";
import ThemeSelector from "../../recoil/selector/ThemeSelector";
import { CSSByThemeType } from "../../classes/types/RecoilStateTypes";

type PropType = {
	title: string;
}

const ThemeVerticalModalFlex = styled(VerticalModalFlex)<{theme:CSSByThemeType}>`
	background-color: ${prop => prop.theme.bgColor};
  color: ${prop => prop.theme.color};
`

const AlertFrame:React.FC<PropType> = ({title}:PropType) => {
	const themeObj = useRecoilValue(ThemeSelector);
	const buttons:ButtonSet[] = [
		{color:{bgColor: "#000", color: "#fff"}, name:"확인", type:"REMOVE"},
		{color:{bgColor: "#fff", color: "#000"}, name:"취소", type:"CANCEL"}
	];

	return (
		<ThemeVerticalModalFlex theme={themeObj}>
			<Paragraph font={{fontWeight:"600", fontSize:"1.6"}}>{title}</Paragraph>
			<ButtonBox names={buttons} gap={.5} />
		</ThemeVerticalModalFlex>
	)
}

export default AlertFrame;