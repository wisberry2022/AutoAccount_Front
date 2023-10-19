import { MouseEventHandler } from "react";
import { usePopup } from "../../../hooks/popup/usePopup";
import { HorizonFlex, VerticalFlex } from "../../atoms/div/StyledFlex";
import Emphasize from "../../atoms/Text/Emphasize";
import DetailDialog from "../../templates/popup/DetailDialog";
import { Debit } from "../../../types/DataTypes";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type propType = {
  debit: Debit;
};

const DebitInfo: React.FC<propType> = ({ debit }) => {
  const [isPop, openPop, closePop, togglePop] = usePopup();
  const theme = useRecoilValue(themeSelector);

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
        <Emphasize theme={theme} font={{ fontSize: "1.1", fontWeight: "300" }}>
          {debit.name}
        </Emphasize>
        <Emphasize theme={theme} font={{ fontSize: "1.1" }}>{debit.deposit}</Emphasize>
      </HorizonFlex>
      <Emphasize theme={theme} font={{ fontSize: "1.8" }}>{debit.amount}원</Emphasize>
      {isPop && (
        <DetailDialog
          modalType="Debit"
          close={close}
          id={Number.parseInt(debit.id)}
        />
      )}
    </VerticalFlex>
  );
};

export default DebitInfo;
