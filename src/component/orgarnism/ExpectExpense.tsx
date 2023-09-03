import DescribeBox from "../molecules/DescribeBox"
import { useRecoilValue } from "recoil";
import { ExpectedState } from "../../recoil/state/AccountState";

const ExpectExpense:React.FC = () => {
	const expectedState = useRecoilValue(ExpectedState);

  return (
    <DescribeBox border=".1rem solid #aaa" main="총 지출금액" sub={`${expectedState.expense ? expectedState.expense : 0}원`} gap="3"  />
  )
}

export default ExpectExpense;