import React from 'react';
import * as fontAwesome from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Loading() {
  const Icon = fontAwesome.FaGithub;
  return (
    <Container>
      <Link to="/">
        <Icon size={50} color="gray" />
      </Link>
    </Container>
  );
}
