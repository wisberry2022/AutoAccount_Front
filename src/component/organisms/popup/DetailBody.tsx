import { HorizonFlex } from "../../atoms/div/StyledFlex";
import DetailLeft from "../../molecules/popup/DetailLeft";
import DetailRight from "../../molecules/popup/DetailRight";
import {Account, Debit, DetailDataType} from "../../../types/DataTypes";

type propType<T> = {
  detail: T;
  modalType: string;
}

const DetailBody: React.FC<propType<DetailDataType>> = ({detail, modalType}) => {
  return (
    <HorizonFlex
      style={{ width: "100%" }}
      option={{ justifyContent: "space-between" }}
    >
      <DetailLeft name={detail.name} serial={detail.serial} />
      <DetailRight modalType={modalType} detail={detail} />
    </HorizonFlex>
  );
};

export default DetailBody;
