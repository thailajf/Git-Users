import React from 'react';
import PropTypes from 'prop-types';
import { Container, InfoContainer, Info, DataConteiner, BTN } from './styles';

export default function RepoData({ repositories, handleClick }) {
  return (
    <Container key={repositories.id}>
      <InfoContainer>
        <Info>
          <DataConteiner>
            <span>Name : </span> {repositories.name}
          </DataConteiner>
        </Info>
        <Info>
          <DataConteiner>
            <span>ID :</span> {repositories.id}
          </DataConteiner>
        </Info>
        <Info>
          <BTN>
            <DataConteiner
              onClick={() => {
                handleClick(repositories.html_url);
              }}
            >
              <span>URL :</span> {repositories.html_url}
            </DataConteiner>
          </BTN>
        </Info>
      </InfoContainer>
    </Container>
  );
}

RepoData.propTypes = {
  repositories: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
