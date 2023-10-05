import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { VerticalFlex, HorizonFlex } from "../../atoms/div/StyledFlex";
import { HiPencil, HiTrash } from "react-icons/hi";

type propType = {
  modifyToggle: VoidtoVoid;
  removeToggle: VoidtoVoid;
};

const ModifyBox: React.FC<propType> = ({ modifyToggle, removeToggle }) => {
  return (
    <VerticalFlex>
      <HorizonFlex option={{ gap: "1" }}>
        <HiPencil
          onClick={modifyToggle}
          style={{ fontSize: "2.2rem", cursor: "pointer" }}
        />
        <HiTrash
          onClick={removeToggle}
          style={{ fontSize: "2.2rem", cursor: "pointer" }}
        />
      </HorizonFlex>
    </VerticalFlex>
  );
};

export default ModifyBox;
