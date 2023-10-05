import { MouseEventHandler } from "react";
import { usePopup } from "../../../hooks/popup/usePopup";
import { HorizonFlex, VerticalFlex } from "../../atoms/div/StyledFlex";
import Emphasize from "../../atoms/Text/Emphasize";
import DetailDialog from "../../templates/popup/DetailDialog";

const DebitInfo: React.FC = () => {
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
          BNK 일반
        </Emphasize>
        <Emphasize font={{ fontSize: "1.1" }}>12345678910</Emphasize>
      </HorizonFlex>
      <Emphasize font={{ fontSize: "1.8" }}>400000원</Emphasize>
      {isPop && <DetailDialog title="자동이체 상세보기" close={close} />}
      {/* {isPop && <div>hi</div>} */}
    </VerticalFlex>
  );
};

export default DebitInfo;
