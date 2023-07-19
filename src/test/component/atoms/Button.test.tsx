import Button from "../../../component/atoms/buttons/Button";
import { render } from "@testing-library/react";

describe('Button Atom Test', () => {
    it('Button Test', () => {
        const view = render(<Button color="WB"/>);
        expect(view.baseElement).toBeInTheDocument();
    });
});