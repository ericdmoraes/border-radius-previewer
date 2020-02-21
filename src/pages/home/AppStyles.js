// Styled components
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  width: 99vw;
  background-color: #f5d9cb;
`;

export const BorderFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 260px;
  background-color: black;
  padding: 10px;
  border: 0.7px solid silver;
  ${props =>
    `border-radius: ${props.newRa.top_left} ${props.newRa.top_right} ${props.newRa.bottom_left} ${props.newRa.bottom_right}`};
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${props => `padding-right: ${props.paddingRight}px;`}
  ${props => `padding-left: ${props.paddingLeft}px;`}
`;
