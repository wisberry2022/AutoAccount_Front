import { VerticalFlex } from "../../atoms/div/StyledFlex";
import { RegisterInput } from "../../atoms/inputs/StyledInput";

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
        placeholder={modalType === "Account" ? "잔액" : "이체금액"}
      />
      <RegisterInput size={{ width: "30" }} placeholder="계좌주" />
      {modalType === "Debit" && (
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
