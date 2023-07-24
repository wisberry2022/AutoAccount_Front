import { styled } from "styled-components";
import { HorizonFlex } from "../atoms/div/StyledFlex";
import SectionHead from "../molecules/SectionHead";

const BorderingHorizonFlex = styled(HorizonFlex)`
	border: .1rem solid #aaa;
	padding: 1.5rem 1rem;
	width: 96%;
`

const DebitAssign:React.FC = () => {
	return (
	<BorderingHorizonFlex option={{justifyContent:"center", gap:"15"}}>
		<SectionHead title="자동이체 등록하기" btn="계좌 등록하기" />
	</BorderingHorizonFlex>
	)
}

export default DebitAssign;