import styled from "styled-components";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import { useRecoilValue } from "recoil";
import { DebitState } from "../../recoil/state/DebitState";
import { useEffect, useState } from "react";
import { Debit, Detail, DetailData } from "../../classes/types/DataTypes";
import { useGetAjax } from "../../hooks/ajax/useAjax";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import DescribeBox from "../molecules/DescribeBox";

const DetailWrapperFlex = styled(VerticalFlex)`
  padding: 1rem;
  border: .1rem solid #aaa;
  width: 100%;
`

type ReturnDetailFunc = (detail:Debit) => DetailData[];

type DetailMapping = {
  withdrawal: string;
  amount: string;
  deposit: string;
  name: string;
  date: string;
}

const DebitDetail:React.FC = () => {
  const modal:string = useFindCurrentModal();
  const [detail, setDetail] = useState<DetailData[] | null>(null);
  const getDebitDetail = useGetAjax(modal);

  const detailMapping:DetailMapping = {
    withdrawal: "출금계좌",
    amount: "이체금액",
    deposit: "입금계좌",
    name: "계좌이름",
    date:"이체일자"
  }

  type ReturnStringFunc = (target:string, detail:Debit) => any;

  const toSub:ReturnStringFunc = (target, detail) => {
    console.log("DebitDetail: ", detail);
    if(target === "출금계좌") {
      return detail.withdrawal;
    }
    if(target === "이체금액") {
      return detail.amount + "원";
    }
    if(target === "입금계좌") {
      return detail.deposit;
    }
    if(target === "계좌이름") {
      return detail.name;
    }
    if(target === "이체일자") {
      return String(detail.date).split("T")[0];
    }
  }

  const toDetail:ReturnDetailFunc = (detail) => {
    const mains = Object.values(detailMapping);

    return Array.from({length:mains.length}).map((v,i) => {
      return {id:i+1, main:mains[i], sub:toSub(mains[i], detail)}
    });
  };

  useEffect(() => {
    getDebitDetail()
    .then(res => setDetail(toDetail(res)))
  }, []);

  return (
    <DetailWrapperFlex>
      {
        Array.isArray(detail) && 
        detail?.map(val => {
          return (
            <DescribeBox key={val.id} gap=".3" main={val.main} sub={val.sub} />
          )
        })
      }
    </DetailWrapperFlex>
  ) 
}

export default DebitDetail;