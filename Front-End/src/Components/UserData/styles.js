import styled from 'styled-components';
import { Colors } from '../../Styles/Colors';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 340px;
  width: 340px;
  max-height: 220px;
  height: 220px;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Image = styled.img`
  max-width: 100px;
  width: 100%;
  height: 100px;
  border-radius: 50px;
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
  margin: 2px 0;
`;

export const DataConteiner = styled.p`
  text-transform: capitalize;
  font-size: 16px;
  color: ${Colors.data};
  font-weight: bold;

  span {
    color: gray;
    font-size: 14px;
    font-weight: normal;
  }
`;
