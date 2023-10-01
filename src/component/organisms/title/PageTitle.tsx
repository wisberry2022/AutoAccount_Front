import { HorizonFlex } from "../../atoms/div/StyledFlex";
import { Title } from "../../atoms/title/Title";

type propType = {
  title: string;
};

const PageTitle: React.FC<propType> = ({ title }) => {
  return (
    <HorizonFlex>
      <Title>{title}</Title>
    </HorizonFlex>
  );
};

export default PageTitle;
