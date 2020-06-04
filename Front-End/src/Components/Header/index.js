import React from 'react';
import * as fontAwesome from 'react-icons/fa';

import { Container } from './styles';

export default function Loading() {
  const Icon = fontAwesome.FaGithub;
  return (
    <Container>
      <Icon size={50} color="gray" />
    </Container>
  );
}
