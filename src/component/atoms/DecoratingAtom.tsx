import styled from "styled-components";

const CircleBtn = styled.div`
  position: relative;
  border: .1rem solid #ddd;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  transition: transform 0.3s ease;
`

type propType = {
  isclick: boolean,
}

export const Circle:React.FC<propType> = (prop) => {
  const {isclick} = prop;
  return (
    <CircleBtn 
      style={{ transform : isclick ? "translateX(155%)" : "translateX(0)"}} 
    />
  )
}

