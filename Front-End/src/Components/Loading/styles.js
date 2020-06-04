import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from{
transform : rotate(0deg);
}
to{
transform :rotate(360deg)}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    margin: 30px 0px;
    animation-name: ${rotate};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;
