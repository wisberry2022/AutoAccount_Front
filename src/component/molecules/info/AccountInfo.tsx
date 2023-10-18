import {FcApproval} from "react-icons/fc";
import { MouseEventHandler } from "react";
import {useRecoilValue} from "recoil";

import {HorizonFlex, VerticalFlex} from "../../atoms/div/StyledFlex";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";
import DetailDialog from "../../templates/popup/DetailDialog";
import { usePopup } from "../../../hooks/popup/usePopup";
import Emphasize from "../../atoms/Text/Emphasize";
import { Account } from "../../../types/DataTypes";

type propType = {
  data: Account;
  isCurrent: boolean;
};

const AccountInfo: React.FC<propType> = ({ data , isCurrent}) => {
  const [isPop, openPop, closePop, togglePop] = usePopup();
  const theme = useRecoilValue(themeSelector);

  const close: MouseEventHandler<SVGAElement> = (e) => {
    e.stopPropagation();
    closePop();
  };

  const toggle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    togglePop();
  };

  return (
    <VerticalFlex
      onClick={toggle}
      option={{ gap: "0", alignItems: "flex-start" }}
    >
      <HorizonFlex>
        <Emphasize theme={theme} font={{ fontSize: "1.1", fontWeight: "300" }}>
          {data.name}
        </Emphasize>
        {isCurrent && <FcApproval style={{fontSize:"1.2rem"}} />}
      </HorizonFlex>
      <Emphasize theme={theme} font={{ fontSize: "1.8" }}>{data.serial}</Emphasize>
      {isPop && (
        <DetailDialog
          modalType="Account"
          close={close}
          id={Number.parseInt(data.id)}
        />
      )}
    </VerticalFlex>
  );
};

export default AccountInfo;
