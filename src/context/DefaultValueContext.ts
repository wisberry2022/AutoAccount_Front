import {createContext, useContext} from "react";

import {objType} from "../types/DataTypes";

type defaultValueSet = {
	[key:string]:objType;
}

export const DefaultValueContext = createContext<defaultValueSet>({});

export const useDefaultValue = (modalType:string):objType => {
	const defaultValue = useContext<objType>(DefaultValueContext);

	return defaultValue[modalType];
}