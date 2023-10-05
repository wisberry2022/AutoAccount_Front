import { styled } from "styled-components";
import { ThirdTitle, Title } from "./Title";

const CenterTitle = styled(Title)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { CenterTitle };

type PropType = {
  title: string;
};

const ModalTitle: React.FC<PropType> = ({ title }: PropType) => {
  return <ThirdTitle>{title}</ThirdTitle>;
};

export { ModalTitle };
