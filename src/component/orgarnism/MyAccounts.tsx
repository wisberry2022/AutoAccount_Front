import { styled } from "styled-components";
import { AccountData } from "../../classes/types/DataTypes";
import List from "../atoms/list/List";
import MyAccountBundle from "../molecules/MyAccountBundle";

const OuterList = styled(List)`
  display: flex; 
  justify-content: center;
  border: .1rem solid #aaa;
  padding: 0 1rem;
  width: 100%;
`;

const MyAccounts:React.FC = () => {

  const accountArr:AccountData[] = [
    {id:1, name:"일반통장", serial:"1122008177401"}
  ]

  return (
    <OuterList>
      {
        accountArr.map(val => {
          return (
            <MyAccountBundle key={val.id} name={val.name} serial={val.serial}/>
          )
        })
      }
    </OuterList>
  )
}

export default MyAccounts;