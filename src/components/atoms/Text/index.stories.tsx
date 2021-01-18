import React from 'react';

import { Content } from '../Layout/Content/index';
import { Text } from '.';

export default {
  title: 'Info Badge',
  component: Text,
};

export const TextExamples = () => (
  <Content>
    <Text as="h1" color="secondary">
      H1: The quick brown fox jumps over the lazy dog
    </Text>

    <Text as="h2" color="primary">
      H2: The quick brown fox jumps over the lazy dog
    </Text>

    <Text as="h3" color="light">
      H3: The quick brown fox jumps over the lazy dog
    </Text>

    <Text as="h4" color="danger">
      H4: The quick brown fox jumps over the lazy dog
    </Text>

    <Text as="h5" color="dark">
      H5: The quick brown fox jumps over the lazy dog
    </Text>

    <Text as="p" color="dark">
      I saw a werewolf with a Chinese menu in his hand. Walking through the{' '}
      <Text as="sub" color="danger">
        streets
      </Text>{' '}
      of Soho in the rain. He{' '}
      <Text as="i" color="primary">
        was
      </Text>{' '}
      looking for a place called Lee Ho Fooks. Gonna get a{' '}
      <Text as="a" color="secondary">
        big dish of beef chow mein.
      </Text>
    </Text>
  </Content>
);
