import { VerticalFlex } from "../../atoms/div/StyledFlex";
import { usePopup } from "../../../hooks/popup/usePopup";
import Emphasize from "../../atoms/Text/Emphasize";
import DetailDialog from "../../templates/popup/DetailDialog";
import { MouseEventHandler } from "react";
import { Account } from "../../../types/DataTypes";

type propType = {
  data: Account;
};

const AccountInfo: React.FC<propType> = ({ data }) => {
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
      <Emphasize font={{ fontSize: "1.1", fontWeight: "300" }}>
        {data.name}
      </Emphasize>
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
