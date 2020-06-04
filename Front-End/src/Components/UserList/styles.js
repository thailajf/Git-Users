import styled from 'styled-components';
import { Colors } from '../../Styles/Colors';

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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    font-family: 'Roboto', sans-serif;
    color: ${Colors.Label};
    padding: 10px 30px;
    border: 1px solid ${Colors.Label};
    border-radius: 10px;
    cursor: pointer;
  }
`;
