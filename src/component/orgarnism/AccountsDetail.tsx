import { styled } from "styled-components";
import { Detail, DetailData } from "../../classes/types/DataTypes";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import DescribeBox from "../molecules/DescribeBox";
import { useRecoilValue } from "recoil";
import { UserClickedAccount } from "../../recoil/state/AccountState";
import useFindCurrentModal from "../../hooks/recoil/useFindCurrentModal";
import { useGetAjax } from "../../hooks/ajax/useAjax";
import { Suspense, useEffect, useState } from "react";

const DetailWrapperFlex = styled(VerticalFlex)`
  padding: 1rem;
  border: .1rem solid #aaa;
  width: 100%;
`

type DetailMapping = {
  balance: string;
  owner: string;
  debits: string;
}

type ToSubData = (detail:Detail, main:string) => string | undefined;

type ReturnDetailFunc = (detail:Detail) => DetailData[];

const AccountDetail:React.FC = () => {
  const currentModal = useFindCurrentModal();
  const getDetail = useGetAjax(currentModal);
  const [details, setDetails] = useState<DetailData[]>([]);
  
  const detailMapping:DetailMapping = {
    balance:"잔액",
    owner: "계좌주",
    debits: "등록된 자동이체 수"
  }

  const toSub:ToSubData = (detail, main) => {
    if(main === "잔액") {
      return detail.balance + "원"
    }
    if(main === "계좌주") {
      return detail.owner
    }
    if(main === "등록된 자동이체 수") {
      return detail.debitCount + "개"
    }
  }

  const toDetail:ReturnDetailFunc = (detail:Detail) => {
    const mains = Object.values(detailMapping);

    return Array.from({length:3}).map((v,i) => {
       return {id:i+1, main:mains[i], sub:toSub(detail, mains[i])}
    });
  }

  useEffect(() => {
    getDetail()
    .then(res => setDetails(toDetail(res)));
  }, []);

  return (
    <DetailWrapperFlex option={{gap:"1"}}>
      {
        details?.map(val => {
          return (
            <DescribeBox key={val.id} gap="1" main={val.main} sub={val.sub} />
          )
        })
      }   
    </DetailWrapperFlex>
  )
}

export default AccountDetail;