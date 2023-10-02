import { HorizonFlex } from "../atoms/div/StyledFlex";
import DebitInfo from "../molecules/info/DebitInfo";
import ModifyBox from "../molecules/modifies/ModifyBox";

const Debit: React.FC = () => {
  return (
    <HorizonFlex
      style={{
        border: ".1rem solid #d9d9d9",
        padding: "1.15rem 2rem",
        width: "36rem",
      }}
      option={{ justifyContent: "space-between" }}
    >
      <DebitInfo />
      <ModifyBox />
    </HorizonFlex>
  );
};

export default Debit;
