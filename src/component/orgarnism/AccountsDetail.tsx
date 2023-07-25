import { styled } from "styled-components";
import { DetailData } from "../../classes/types/DataTypes";
import { VerticalFlex } from "../atoms/div/StyledFlex";
import DescribeBox from "../molecules/DescribeBox";

const DetailWrapperFlex = styled(VerticalFlex)`
  padding: 1rem;
  border: .1rem solid #aaa;
  width: 100%;
`

type PropType = {
  detail:DetailData[];
}


const AccountDetail:React.FC<PropType> = ({detail}:PropType) => {

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