import { render } from "@testing-library/react";
import Title from "../../component/atoms/Title";

describe('atom test', () => {
    it('render title component', () => {
        const title = render(<Title />)
        expect(title.getByRole("heading")).toBeInTheDocument();
    });
})