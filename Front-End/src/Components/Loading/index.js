import React from 'react';
import * as fontIcon from 'react-icons/ai';

import { Container } from './styles';

export default function Loading() {
  const Icon = fontIcon.AiOutlineLoading;
  return (
    <Container>
      <Icon size={80} color="gray" />
    </Container>
  );
}
