import styled from "styled-components";

import { VerticalFlex } from "../../atoms/div/StyledFlex";
import { CustomSizingInput } from "../../atoms/inputs/StyledInput";

const RegisterInput = styled(CustomSizingInput)`
  border: 0.1rem solid #d9d9d9;
  padding: 0.8rem;
`;

type propType = {
  modalType: string;
};

const InputBox: React.FC<propType> = ({ modalType }) => {
  return (
    <VerticalFlex style={{ marginBottom: "1.5rem" }}>
      <RegisterInput size={{ width: "30" }} placeholder="계좌번호" />
      <RegisterInput size={{ width: "30" }} placeholder="계좌이름" />
      <RegisterInput
        size={{ width: "30" }}
        placeholder={modalType === "AccountRegister" ? "잔액" : "이체금액"}
      />
      <RegisterInput size={{ width: "30" }} placeholder="계좌주" />
      {modalType === "DebitRegister" && (
        <RegisterInput
          size={{ width: "30" }}
          type="date"
          placeholder="이체일자"
        />
      )}
    </VerticalFlex>
  );
};

export default InputBox;
