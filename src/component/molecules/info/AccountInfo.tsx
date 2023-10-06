import { VerticalFlex } from "../../atoms/div/StyledFlex";
import { usePopup } from "../../../hooks/popup/usePopup";
import Emphasize from "../../atoms/Text/Emphasize";
import DetailDialog from "../../templates/popup/DetailDialog";
import { VoidtoVoid } from "../../../classes/func/FuncTypes";
import { MouseEventHandler } from "react";

const AccountInfo: React.FC = () => {
  const [isPop, openPop, closePop, togglePop] = usePopup();

  const close: MouseEventHandler<SVGAElement> = (e) => {
    e.stopPropagation();
    closePop();
  };

  return (
    <VerticalFlex
      onClick={togglePop}
      option={{ gap: "0", alignItems: "flex-start" }}
    >
      <Emphasize font={{ fontSize: "1.1", fontWeight: "300" }}>
        BNK 일반
      </Emphasize>
      <Emphasize font={{ fontSize: "1.8" }}>12345678910</Emphasize>
      {isPop && <DetailDialog modalType="Account" close={close} />}
    </VerticalFlex>
  );
};

export default AccountInfo;
