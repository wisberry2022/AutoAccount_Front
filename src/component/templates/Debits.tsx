import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import Register from "../molecules/Register";
import TotalExpense from "../molecules/TotalExpense";
import DebitList from "../organisms/list/DebitList";

const Debits: React.FC = () => {
  return (
    <LayoutVerticalFlex option={{ justifyContent: "flex-start" }}>
      <Register content="자동이체 등록하기" />
      <DebitList />
      <TotalExpense />
    </LayoutVerticalFlex>
  );
};

export default Debits;
