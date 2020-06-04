import React from 'react';
import * as fontAwesome from 'react-icons/ai';

import { Container } from './styles';

export default function Loading() {
  const Icon = fontAwesome.AiOutlineLoading;
  return (
    <Container>
      <Icon size={80} color="gray" />
    </Container>
  );
}
