import { MouseEventHandler, useContext } from "react";

import {findById, getDetailData, getId} from "../../../utils/FuncSet";
import { accountState } from "../../../recoil/states/ClickedState";
import {Account, Debit, objType} from "../../../types/DataTypes";
import { VerticalModalFlex } from "../../atoms/div/StyledFlex";
import DetailHeader from "../../organisms/popup/DetailHeader";
import DetailBody from "../../organisms/popup/DetailBody";
import { DataContext } from "../../../App";
import { useRecoilValue } from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type propType = {
  close: MouseEventHandler<SVGAElement>;
  modalType: string;
  id: number;
};

const titles: objType = {
  Account: "계좌 상세보기",
  Debit: "자동이체 상세보기",
};

const DetailDialog: React.FC<propType> = ({ close, modalType, id }) => {
  const theme = useRecoilValue(themeSelector);
  const accounts = useContext(DataContext);
  const current = useRecoilValue(accountState);
  const detail = findById(
    modalType === "Account"
      ? accounts
      : findById(accounts, getId(accounts, current.id))[0].debits,
    id
  )[0];

  return (
    <VerticalModalFlex theme={theme} style={{ width: modalType === "Account" ? "40%" : "50%" }} option={{ gap: "2.5" }}>
      <DetailHeader close={close} title={titles[modalType]} />
      <DetailBody modalType={modalType} detail={getDetailData(detail)} />
    </VerticalModalFlex>
  );
};

export default DetailDialog;
