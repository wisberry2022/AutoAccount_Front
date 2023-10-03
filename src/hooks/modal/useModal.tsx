import { MouseEventHandler } from "react";

import { modalState } from "../../recoil/state/ModalState";
import { hookType } from "../../classes/func/FuncTypes";
import { useSetRecoilState } from "recoil";

export const useModal: hookType = (current) => {
  const setModal = useSetRecoilState(modalState);

  const toggleModal: MouseEventHandler<HTMLDivElement> = () => {
    setModal((prev) => {
      return {
        ...prev,
        [current]: !prev[current],
      };
    });
  };

  return toggleModal;
};
