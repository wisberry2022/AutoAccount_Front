import { NoneScrollBarFlex } from "../../atoms/div/StyledFlex";
import Debit from "../Debit";

const DebitList: React.FC = () => {
  return (
    <NoneScrollBarFlex
      style={{ marginBottom: "2.5rem" }}
      option={{ gap: ".7" }}
    >
      <Debit />
      <Debit />
      <Debit />
      <Debit />
      <Debit />
      <Debit />
      <Debit />
      <Debit />
      <Debit />
    </NoneScrollBarFlex>
  );
};

export default DebitList;
