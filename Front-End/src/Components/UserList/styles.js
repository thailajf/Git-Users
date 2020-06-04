import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ContainerData = styled.ul``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    padding: 10px 30px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
