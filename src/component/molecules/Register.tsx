import styled from "styled-components";
import Emphasize from "../atoms/Text/Emphasize";
import { CustomSizingFlex } from "../atoms/div/StyledFlex";

type propType = {
  content: string;
};

const CustomFlex = styled(CustomSizingFlex)`
  margin-bottom: 1.5rem;
  border: 0.1rem solid #d9d9d9;
  padding: 3rem 0;
  text-align: center;
  cursor: pointer;
`;

const Register: React.FC<propType> = ({ content }) => {
  return (
    <CustomFlex
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
        {content}
      </Emphasize>
    </CustomFlex>
  );
};

export default Register;
