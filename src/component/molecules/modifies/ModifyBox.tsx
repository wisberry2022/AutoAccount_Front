import { VerticalFlex, HorizonFlex } from "../../atoms/div/StyledFlex";
import { HiPencil, HiTrash } from "react-icons/hi";

const ModifyBox: React.FC = () => {
  return (
    <VerticalFlex>
      <HorizonFlex option={{ gap: "1" }}>
        <HiPencil style={{ fontSize: "2.2rem" }} />
        <HiTrash style={{ fontSize: "2.2rem" }} />
      </HorizonFlex>
    </VerticalFlex>
  );
};

export default ModifyBox;
