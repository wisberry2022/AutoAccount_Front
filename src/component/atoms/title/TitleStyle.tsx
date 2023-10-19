import { styled } from "styled-components";
import { ThirdTitle, Title } from "./Title";
import {useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";

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
  const theme = useRecoilValue(themeSelector);

  return <ThirdTitle theme={theme}>{title}</ThirdTitle>;
};

export { ModalTitle };
