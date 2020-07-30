import React from 'react';

import { icHome, Icon } from '../Icon';
import { Content } from '../Layout/Content/index';
import { Text } from '.';

export default {
  title: 'Info Badge',
  component: Text,
};

export const TextExamples = () => (
  <Content>
    <Text color="secondary">
      <h1>H1: The quick brown fox jumps over the lazy dog</h1>
    </Text>

    <Text color="primary">
      <h2>H2: The quick brown fox jumps over the lazy dog</h2>
    </Text>

    <Text color="light">
      <h3>H3: The quick brown fox jumps over the lazy dog</h3>
    </Text>

    <Text color="danger">
      <h4>H4: The quick brown fox jumps over the lazy dog</h4>
    </Text>

    <Text color="dark">
      <h5>H5: The quick brown fox jumps over the lazy dog</h5>
    </Text>

    <p>
      I saw a werewolf with a Chinese menu in his hand. Walking through the{' '}
      <Text color="danger">
        <sub>streets</sub>
      </Text>{' '}
      of Soho in the rain. He{' '}
      <Text color="primary">
        <i>was</i>
      </Text>{' '}
      looking for a place called Lee Ho Fooks. Gonna get a{' '}
      <Text color="secondary">
        <a>big dish of beef chow mein.</a>
      </Text>
      <Text color="danger">
        <Icon name={icHome} />
      </Text>
    </p>
  </Content>
);
