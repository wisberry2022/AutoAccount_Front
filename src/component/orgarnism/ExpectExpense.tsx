import { useEffect, useState } from "react";
import DescribeBox from "../molecules/DescribeBox"
import { useRecoilValue } from "recoil";
import { UserClickedAccount } from "../../recoil/state/AccountState";
import useAjaxState from "../../hooks/ajax/useAjaxState";
import axios from "axios";

const ExpectExpense:React.FC = () => {

  const clicked = useRecoilValue(UserClickedAccount);
	const [expense, setExpense] = useState<number>(0); 
	const debitAssign = useAjaxState('isDebitAssign');
	const debitUpdate = useAjaxState('isDebitUpdate');
	const debitDelete = useAjaxState('isDebitDelete');

  useEffect(() => {
		axios.get(`http://localhost:8080/mysalary/api/v1/account/${clicked.id}/amount`)
			.then(res => setExpense(res.data.result));		
	}, [clicked, debitAssign, debitUpdate, debitDelete]);
  
  return (
    <DescribeBox border=".1rem solid #aaa" main="총 지출금액" sub={`${typeof expense === "number" ? expense : 0}원`} gap="3"  />
  )
}

export default ExpectExpense;