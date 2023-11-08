import {render, renderHook, screen} from "@testing-library/react";
import ExceptionAlert from "../../../component/organisms/alert/ExceptionAlert";
import {describe, expect} from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import {atom, RecoilRoot, selector, useRecoilValue} from "recoil";
import {themeSelector} from "../../../recoil/selectors/ThemeSelector";
import {createContext, SetStateAction} from "react";

type alertContext<T> = {
	state: T;
	setter: React.Dispatch<SetStateAction<T>>
}

const testContext = createContext<alertContext<string|null>>({} as alertContext<string | null>);


const rootRendering = (message:string) => {
	render(
		<RecoilRoot>
			<ExceptionAlert message={message} />
		</RecoilRoot>
	)
}

describe("ExceptionAlert Test", () => {
	test("Simple Rendering Test", () => {
		rootRendering("테스트 경고");

		const message:HTMLElement = screen.getByText("테스트 경고");

		expect(message).toBeInTheDocument();
	});
});

const mockRecoil = atom<string>({
	key: "mockRecoil",
	default: ""
})
