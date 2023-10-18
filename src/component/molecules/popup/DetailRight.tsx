import NormalText from "../../atoms/Text/NormalText";
import { HorizonFlex, VerticalFlex } from "../../atoms/div/StyledFlex";
import {DetailDataType} from "../../../types/DataTypes";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

type propType = {
  detail: DetailDataType;
  modalType: string;
}

type valueObj = {
  [key in string]:string;
}

type valueMap = {
  [key : string]: valueObj;
}

const normalMapped: valueObj = {
  owner: "계좌주",
  debitCount: "등록된 자동이체 수",
  date: "이체일자",
  withdrawal: "출금계좌",
  name: "통장이름"
}

const valueMapped:valueMap = {
  serial: {Debit:"입금계좌"},
  amount: {Account:"잔액", Debit:"이체금액"},
}

const getValueMapped = (modalType:string, key:string, isModal=false) => {
  if(isModal) {
    return valueMapped[key][modalType];
  }
  return normalMapped[key];
}

const getDataByType = (modalType:string, data:DetailDataType):any => {
  if(modalType === "Account") {
    let {id, name, serial, expense, ...rested} = data;
    return rested;
  }
  let {id, ...rested} = data;
  return rested;
}

const DetailRight: React.FC<propType> = ({detail, modalType}) => {
  const rested = getDataByType(modalType, detail);
  const theme=  useRecoilValue(themeSelector);
  const values = Object.values(rested) as (keyof DetailDataType)[];
  return (
    <VerticalFlex
      style={{ width: "50%", height: "15rem" }}
      option={{ justifyContent: "flex-end" }}
    >
      {
        Object.keys(rested).map((data, idx) => {
          const key = getValueMapped(modalType, data, ['serial','amount'].includes(data) ? true : false)
          return (
              <HorizonFlex
                key={idx}
                style={{ width: "100%" }}
                option={{ justifyContent: "space-between" }}
              >
                <NormalText theme={theme}>{key}</NormalText>
                <NormalText theme={theme} style={{ fontWeight: "600" }}>
                  {
                  key === "이체일자" ? values[idx].slice(0, 10) : values[idx]
                  }
                  {
                      ["잔액","이체금액"].includes(key) && " 원"
                  }
                  {
                    key === "등록된 자동이체 수" && " 개"
                  }
                </NormalText>
              </HorizonFlex>
          )
        })
      }
    </VerticalFlex>
  );
};

export default DetailRight;
