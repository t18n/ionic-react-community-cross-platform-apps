import { Trans } from '@lingui/macro';
import React from 'react';

import { Text } from '../../atoms/Text/index';

interface TextErrorProps {
  text?: string;
}

export const TextError = ({ text }: TextErrorProps) => {
  return text ? (
    <Text as="span" type="subtitle-s" color="danger" transform="case-none" extraClasses="mt-s">
      <Trans id={text} />
    </Text>
  ) : null;
};
