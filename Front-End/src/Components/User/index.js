import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image, InfoContainer, Info, BTN } from './styles';

export default function User({
  login,
  createdat,
  id,
  htmlurl,
  avatarurl,
  handleClick,
}) {
  return (
    <Container>
      <Image src={avatarurl} />
      <InfoContainer>
        <Info>
          <span>ID:</span> {id}
        </Info>
        <Info>
          <span>Login:</span> {login}
        </Info>
      </InfoContainer>
      <InfoContainer>
        <Info>
          <span>Login Created At:</span> {createdat}
        </Info>
        <BTN
          onClick={() => {
            handleClick(htmlurl);
          }}
        >
          {' '}
          <Info>
            <span>Profile Url:</span>
            {htmlurl}
          </Info>
        </BTN>
      </InfoContainer>
    </Container>
  );
}

User.propTypes = {
  login: PropTypes.string,
  createdat: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avatarurl: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  htmlurl: PropTypes.string.isRequired,
};

User.defaultProps = {
  login: '',
  avatarurl: '',
};
