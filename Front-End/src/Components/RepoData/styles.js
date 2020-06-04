import styled from 'styled-components';
import { Colors } from '../../Styles/Colors';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  width: 100%;
  max-height: 220px;
  height: 210px;
  background-color: ${Colors.Card};
  margin: 10px;
  border-radius: 10px;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 0 10px;
  flex-wrap: wrap;
  margin-top: 3px;
`;

export const DataConteiner = styled.p`
  text-transform: capitalize;
  font-size: 15px;
  color: ${Colors.data};
  font-weight: bold;

  span {
    color: gray;
    font-size: 13px;
    color: ${Colors.Label};
    font-weight: normal;
  }
`;

export const BTN = styled.div`
  cursor: pointer;
`;
