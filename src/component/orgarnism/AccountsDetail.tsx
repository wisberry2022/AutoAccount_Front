import { styled } from "styled-components";
import { DetailData } from "../../classes/types/DataTypes";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import DescribeBox from "../molecules/DescribeBox";

const DetailWrapperFlex = styled(VerticalFlex)`
  padding: 1rem;
  border: .1rem solid #aaa;
  width: 100%;
`

const AccountDetail:React.FC = () => {

  const detail:DetailData[] = [
    {id:1, main:"잔액", sub:"15000원"},
    {id:2, main:"계좌주", sub:"왕인서"},
    {id:3, main:"등록된 자동이체 수", sub:"2개"}
  ];

  return (
    <DetailWrapperFlex option={{gap:"1"}}>
      {
        detail.map(val => {
          return (
            <DescribeBox key={val.id} gap="1" main={val.main} sub={val.sub} />
          )
        })
      }   
    </DetailWrapperFlex>
  )
}

export default AccountDetail;