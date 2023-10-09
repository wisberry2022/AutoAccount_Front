import { MouseEventHandler } from "react";
import { usePopup } from "../../../hooks/popup/usePopup";
import { HorizonFlex, VerticalFlex } from "../../atoms/div/StyledFlex";
import Emphasize from "../../atoms/Text/Emphasize";
import DetailDialog from "../../templates/popup/DetailDialog";
import { Debit } from "../../../classes/types/DataTypes";

type propType = {
  debit: Debit;
};

const DebitInfo: React.FC<propType> = ({ debit }) => {
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
      <HorizonFlex>
        <Emphasize font={{ fontSize: "1.1", fontWeight: "300" }}>
          {debit.name}
        </Emphasize>
        <Emphasize font={{ fontSize: "1.1" }}>{debit.deposit}</Emphasize>
      </HorizonFlex>
      <Emphasize font={{ fontSize: "1.8" }}>{debit.amount}원</Emphasize>
      {isPop && <DetailDialog modalType="Debit" close={close} />}
      {/* {isPop && <div>hi</div>} */}
    </VerticalFlex>
  );
};

export default DebitInfo;
