import { useState } from "react";
import { VoidtoVoid } from "../../classes/func/FuncTypes";

type PopupHookType = () => [boolean, VoidtoVoid, VoidtoVoid, VoidtoVoid];

export const usePopup: PopupHookType = () => {
  const [popup, setPop] = useState(false);

  const openPop: VoidtoVoid = () => {
    setPop(true);
  };

  const closePop: VoidtoVoid = () => {
    setPop(false);
  };

  const togglePop: VoidtoVoid = () => {
    setPop((prev) => !prev);
  };

  return [popup, openPop, closePop, togglePop];
};
