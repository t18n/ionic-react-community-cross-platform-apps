import classNames from 'classnames';
import { Text } from 'components/atoms/Text';
import React from 'react';

interface ContentStatsGroupProps {
  leftContent: string[];
  rightContent?: string[];
}

export const ContentStatsGroup = ({ leftContent, rightContent }: ContentStatsGroupProps) => {
  const justify =
    leftContent && rightContent
      ? 'justify-between'
      : leftContent && !rightContent
      ? 'justify-start'
      : 'justify-end';

  return (
    <div className={classNames('mt-m flex', justify)}>
      {leftContent &&
        leftContent.map((content) => (
          <div key={content} className="mr-m subtitle-s">
            <Text as="span" color="medium">
              {content}
            </Text>
          </div>
        ))}

      {rightContent &&
        rightContent.map((content) => (
          <div key={content} className="mr-m subtitle-s">
            <Text as="span" color="medium">
              {content}
            </Text>
          </div>
        ))}
    </div>
  );
};
