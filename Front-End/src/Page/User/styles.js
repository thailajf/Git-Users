import styled from 'styled-components';
import { Colors } from '../../Styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RepoContainer = styled.div``;

export const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  color: ${Colors.Label};
  font-weight: normal;
  margin: 15px 0;
  font-family: 'Roboto', sans-serif;
`;
