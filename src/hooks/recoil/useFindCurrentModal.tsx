import { useRecoilValue } from "recoil";
import { ModalStates } from "../../recoil/state/ModalState";

type CustomHookType = () => string;

const useFindCurrentModal:CustomHookType = () => {
  const state = useRecoilValue(ModalStates);
  
  return Object.keys(state)
    .filter(v => state[v])
    .reverse()[0];
}

export default useFindCurrentModal;