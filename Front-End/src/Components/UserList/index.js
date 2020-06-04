import React from 'react';
import PropTypes from 'prop-types';

import { Container, ContainerData, ButtonContainer } from './styles';
import UserData from '../UserData';

export default function UserList({ users, handleUserPage, handleLoadMore }) {
  return (
    <Container>
      {users.map((p) => (
        <ContainerData
          key={p.id}
          onClick={() => {
            handleUserPage(p.login);
          }}
        >
          <UserData
            id={p.id}
            login={p.login}
            imgUser={p.avatar_url}
            url={p.url}
          />
        </ContainerData>
      ))}
      <ButtonContainer>
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      </ButtonContainer>
    </Container>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  handleUserPage: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
