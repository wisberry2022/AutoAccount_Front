import {Dispatch, SetStateAction} from "react";

export type alertContext = {
	state: string | null;
	setter: Dispatch<SetStateAction<string | null>>
}