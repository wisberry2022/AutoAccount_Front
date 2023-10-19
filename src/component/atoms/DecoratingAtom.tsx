import styled from "styled-components";
import {useSetRecoilState} from "recoil";
import {currTheme} from "../../recoil/theme/Theme";
import { useEffect } from "react";

const CircleBtn = styled.div`
  position: relative;
  border: .1rem solid #ddd;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease;
`

type propType = {
  isClick: boolean,
}

export const Circle:React.FC<propType> = (prop) => {
  const {isClick} = prop;
  const setTheme = useSetRecoilState(currTheme);

  useEffect(() => {
    setTheme(isClick ? "BRIGHT" : "DARK");
  }, [isClick]);

  return (
    <CircleBtn 
      style={{ transform : isClick ? "translateX(155%)" : "translateX(0)"}}
    />
  )
}

