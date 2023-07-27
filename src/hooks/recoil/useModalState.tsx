import { useRecoilState } from "recoil";
import { ModalStates } from "../../recoil/state/ModalState";

type SetterType = (state:string) => void;
type CustomHookType = (state:string) => [boolean, SetterType];

const useModalState:CustomHookType = state => {
  const [states, setState] = useRecoilState(ModalStates);

  const setModalState:SetterType = state => {
    setState(
      prev => ({...prev, [state]:!prev[state]})
    );
  }

  return [states[state], setModalState];
}

export default useModalState;