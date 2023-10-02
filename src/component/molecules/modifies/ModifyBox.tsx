import { VerticalFlex, HorizonFlex } from "../../atoms/div/StyledFlex";
import { HiPencil, HiTrash } from "react-icons/hi";

const ModifyBox: React.FC = () => {
  return (
    <VerticalFlex>
      <HorizonFlex option={{ gap: "1" }}>
        <HiPencil style={{ fontSize: "2.2rem", cursor: "pointer" }} />
        <HiTrash style={{ fontSize: "2.2rem", cursor: "pointer" }} />
      </HorizonFlex>
    </VerticalFlex>
  );
};

export default ModifyBox;
