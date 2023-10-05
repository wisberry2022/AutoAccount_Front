import { HorizonFlex } from "../../atoms/div/StyledFlex";
import DetailLeft from "../../molecules/popup/DetailLeft";
import DetailRight from "../../molecules/popup/DetailRight";

const DetailBody: React.FC = () => {
  return (
    <HorizonFlex
      style={{ width: "100%" }}
      option={{ justifyContent: "space-between" }}
    >
      <DetailLeft />
      <DetailRight />
    </HorizonFlex>
  );
};

export default DetailBody;
