import styled from "styled-components";

import { CustomSizingFlex } from "../atoms/div/StyledFlex";
import { useModal } from "../../hooks/modal/useModal";
import Emphasize from "../atoms/Text/Emphasize";
import { MouseEventHandler } from "react";
import { objType } from "../../classes/types/DataTypes";

type propType = {
  modalType: string;
};

const CustomFlex = styled(CustomSizingFlex)`
  margin-bottom: 1.5rem;
  border: 0.1rem solid #d9d9d9;
  padding: 3rem 0;
  text-align: center;
  cursor: pointer;
`;

const titles: objType = {
  AccountRegister: "내 계좌 등록하기",
  DebitRegister: "자동이체 등록하기",
};

const Register: React.FC<propType> = ({ modalType }) => {
  const toggleModal = useModal(modalType);

  return (
    <CustomFlex
      onClick={toggleModal}
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
