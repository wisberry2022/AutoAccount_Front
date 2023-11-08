import {createContext, SetStateAction, useEffect, useState} from "react";
import { alertContext } from "../types/Context";

type ContextHook = (time:number) => [string | null, React.Dispatch<SetStateAction<string | null>>]

export const AlertContext = createContext<alertContext>({} as alertContext);

export const useAlertContext:ContextHook = (time) => {
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage(null);
		}, time);
		return () => clearTimeout(timer);
	}, [message])

	return [message, setMessage];

}
