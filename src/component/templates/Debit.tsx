import { styled } from "styled-components";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import DebitArea from "../orgarnism/DebitArea";
import DebitAssign from "../orgarnism/DebitAssign";
import DescribeBox from "../molecules/DescribeBox";

const VerticlaSizingFlex = styled(VerticalFlex)`
	height: 64.2vh;
`;

const Debit:React.FC = () => {
	return (
		<VerticlaSizingFlex option={{justifyContent:"flex-start"}}>
			<DebitAssign />
			<DebitArea />
			<DescribeBox border=".1rem solid #aaa" main="총 지출금액" sub="800000원" gap="3"  />
		</VerticlaSizingFlex>		
	)
}

export default Debit;