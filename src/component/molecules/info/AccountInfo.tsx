import {HorizonFlex, VerticalFlex} from "../../atoms/div/StyledFlex";
import { usePopup } from "../../../hooks/popup/usePopup";
import Emphasize from "../../atoms/Text/Emphasize";
import DetailDialog from "../../templates/popup/DetailDialog";
import { MouseEventHandler } from "react";
import { Account } from "../../../types/DataTypes";
import {FcApproval} from "react-icons/fc";

type propType = {
  data: Account;
  isCurrent: boolean;
};

const AccountInfo: React.FC<propType> = ({ data , isCurrent}) => {
  const [isPop, openPop, closePop, togglePop] = usePopup();

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
        <Emphasize font={{ fontSize: "1.1", fontWeight: "300" }}>
          {data.name}
        </Emphasize>
        {isCurrent && <FcApproval style={{fontSize:"1.2rem"}} />}
      </HorizonFlex>
      <Emphasize font={{ fontSize: "1.8" }}>{data.serial}</Emphasize>
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
