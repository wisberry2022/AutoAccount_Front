import { VerticalFlex } from "../../atoms/div/StyledFlex";
import { RegisterInput } from "../../atoms/inputs/StyledInput";

type propType = {
  modalType: string;
};

const ModifyInputBox: React.FC<propType> = ({ modalType }) => (
  <VerticalFlex style={{ marginBottom: "1.5rem" }}>
    {modalType === "Debit" && (
      <>
        <RegisterInput size={{ width: "30" }} placeholder="계좌번호" />
        <RegisterInput size={{ width: "30" }} placeholder="이체금액" />
      </>
    )}
    {modalType === "Account" && (
      <RegisterInput size={{ width: "30" }} placeholder="계좌이름" />
    )}
    <RegisterInput size={{ width: "30" }} placeholder="잔액" />
  </VerticalFlex>
);

export default ModifyInputBox;
