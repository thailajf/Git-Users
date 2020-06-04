import styled from 'styled-components';
import { Colors } from '../../Styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 900px;
  width: 100%;
  max-height: 220px;
  height: 210px;
  background-color: ${Colors.Card};
  flex-wrap: wrap;
  margin: 10px;
  border-radius: 10px;
`;

export const Image = styled.img`
  max-width: 180px;
  width: 100%;
  height: 180px;
  border-radius: 60%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 3px;
`;

export const Info = styled.p`
  color: ${Colors.data};
  font-size: 15px;
  font-weight: bold;

  span {
    color: ${Colors.Label};
    font-size: 13px;
    font-weight: normal;
  }
`;

export const BTN = styled.div`
  cursor: pointer;
`;
