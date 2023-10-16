import {atom} from "recoil";
import {Register} from "../../types/AxiosType";

export const registerState = atom<Register>({
	key: "registerState",
	default: {
		name: "",
	}
})
