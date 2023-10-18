import { MouseEventHandler } from "react";
import { FcApproval } from "react-icons/fc";

import { VerticalFlex, HorizonFlex } from "../../atoms/div/StyledFlex";
import { HiPencil, HiTrash } from "react-icons/hi";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type propType = {
  modifyToggle: MouseEventHandler<SVGElement>;
  removeToggle: MouseEventHandler<SVGElement>;
};

const ModifyBox: React.FC<propType> = ({modifyToggle, removeToggle }) => {
  const theme = useRecoilValue(themeSelector);

  return (
    <VerticalFlex>
      <HorizonFlex option={{ gap: "1" }}>
        <HiPencil
          onClick={modifyToggle}
          style={{ fontSize: "2.2rem", cursor: "pointer", color:theme.color }}
        />
        <HiTrash
          onClick={removeToggle}
          style={{ fontSize: "2.2rem", cursor: "pointer", color:theme.color }}
        />
      </HorizonFlex>
    </VerticalFlex>
  );
};

export default ModifyBox;
