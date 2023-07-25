import { render } from "@testing-library/react";
import {Title} from "../../../component/atoms/title/Title";
import { CenterTitle } from "../../../component/atoms/title/TitleStyle";

describe('Title Atom Test', () => {
    it('Basic Title Test', () => {
        const view = render(<Title />);
        expect(view.baseElement).toBeInTheDocument();
    });

    it('Center Title Atom Test', () => {
        const view = render(<CenterTitle />);
        expect(view.baseElement).toBeInTheDocument();
    })
});