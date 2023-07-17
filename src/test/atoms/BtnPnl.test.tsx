import { render } from "@testing-library/react";
import Panel from "../../component/atoms/Panel";

describe('Panel & Button Test', () => {
    it('panel test', () => {
        const panel = render(<Panel />);
        expect(panel.baseElement).toBeInTheDocument();
    });
})