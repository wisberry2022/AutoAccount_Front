import { render } from "@testing-library/react";
import { FlexSet, Scale } from "../../../types/StyleTypes";
import Flex from "../../../component/atoms/div/Flex";
import { ViewCenterFlex, CustomSizingFlex, HorizonFlex, VerticalFlex } from "../../../component/atoms/div/StyledFlex";

describe('Flex Component Test', () => {
    it('Normal Flex Test', () => {
        const view = render(<Flex />);
        expect(view.baseElement).toBeInTheDocument();
    });

    it('Styled Flex Test', () => {
        const size:Scale = {width:"30", height:"10"};
        const view = render(<CustomSizingFlex size={size}/>);
        expect(view.baseElement).toBeInTheDocument();
    });

    it('Styled Flex Test - Center', () => {
        const view = render(<ViewCenterFlex />);
        expect(view.baseElement).toBeInTheDocument();
    });

    it('Styled VerticalFlex Test', () => {
        const flexSetting:FlexSet = {justifyContent: "center", alignItems:"center", gap:"1"};
        const view = render(<VerticalFlex option={flexSetting}/>);
        expect(view.baseElement).toBeInTheDocument();
    });

    it('Styled HorizonFlex Test', () => {
        const flexSetting:FlexSet = {justifyContent: "center", alignItems:"center", gap:"1.5"};
        const view = render(<HorizonFlex option={flexSetting}/>);
        expect(view.baseElement).toBeInTheDocument();
    });

})