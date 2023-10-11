import styled from "styled-components";

import { CustomSizingFlex } from "../atoms/div/StyledFlex";
import Emphasize from "../atoms/Text/Emphasize";
import { objType } from "../../types/DataTypes";
import { VoidtoVoid } from "../../classes/func/FuncTypes";

type propType = {
  modalType: string;
  toggle: VoidtoVoid;
};

const CustomFlex = styled(CustomSizingFlex)`
  margin-bottom: 1.5rem;
  border: 0.1rem solid #d9d9d9;
  padding: 3rem 0;
  text-align: center;
  cursor: pointer;
`;

const titles: objType = {
  Account: "내 계좌 등록하기",
  Debit: "자동이체 등록하기",
};

const Register: React.FC<propType> = ({ modalType, toggle }) => {
  return (
    <CustomFlex
      onClick={toggle}
      size={{
        width: "40",
      }}
    >
      <Emphasize
        font={{
          fontSize: "2",
          fontWeight: "600",
        }}
      >
        {titles[modalType]}
      </Emphasize>
    </CustomFlex>
  );
};

export default Register;
