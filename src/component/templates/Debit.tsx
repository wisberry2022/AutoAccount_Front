import { LayoutVerticalFlex } from "../atoms/div/StyledFlex";
import Register from "../molecules/Register";

const Debit: React.FC = () => {
  return (
    <LayoutVerticalFlex option={{ justifyContent: "flex-start" }}>
      <Register content="자동이체 등록하기" />
    </LayoutVerticalFlex>
  );
};

export default Debit;
