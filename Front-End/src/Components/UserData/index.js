import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, InfoContainer, Info, DataConteiner } from './styles';

export default function UserData({ id, login, imgUser }) {
  return (
    <Container key={id}>
      <InfoContainer>
        <Image src={imgUser} />
      </InfoContainer>
      <InfoContainer>
        <Info>
          <DataConteiner>
            <span>Login: </span> {login}
          </DataConteiner>
        </Info>
        <Info>
          <DataConteiner>
            <span>ID: </span> {id}
          </DataConteiner>
        </Info>
      </InfoContainer>
    </Container>
  );
}

UserData.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string,
  imgUser: PropTypes.string,
};

UserData.defaultProps = {
  login: '',
  imgUser: '',
};
