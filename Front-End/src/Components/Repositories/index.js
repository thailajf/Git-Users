import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Data from '../RepoData';

export default function Repositories({ repositories, handleClick }) {
  return (
    <Container>
      {repositories.map((r) => (
        <Data key={r.id} repositories={r} handleClick={handleClick} />
      ))}
    </Container>
  );
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
