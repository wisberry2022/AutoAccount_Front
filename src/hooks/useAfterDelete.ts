import {useSetRecoilState} from "recoil";
import {useContext} from "react";

import {accountState} from "../recoil/states/ClickedState";
import {AccountState} from "../types/RecoilStateTypes";
import {ParamToVoid} from "../classes/func/FuncTypes";
import {DataContext} from "../App";

export const useAfterDelete = ():ParamToVoid<string> => {
	const accounts = useContext(DataContext);
	const setId = useSetRecoilState<AccountState>(accountState);

	const after:ParamToVoid<string> = (id) => {
		const result = accounts.filter(account => account.id > id);
		const idx = result.length ? Number.parseInt(result[0].id) : 0
		setId({id:idx});
	}

	return after;
}