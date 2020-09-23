import { Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { icDots, icMessage, Icon, icShare, icThumbUp } from 'components/atoms/Icon';
import { Text } from 'components/atoms/Text';
import React from 'react';

export const ContentActionGroup = () => (
  <div className="flex justify-between">
    <div>
      <Button color="medium" fill="clear" size="small" className="mr-s">
        <Icon slot="start" icon={icThumbUp} />
        <Text as="span" color="medium">
          <Trans id="label.react" />
        </Text>
      </Button>
      <Button
        color="medium"
        fill="clear"
        size="small"
        className="mr-s"
        onClick={() => console.log('comment click')}
      >
        <Icon slot="start" icon={icMessage} />
        <Text as="span" color="medium">
          <Trans id="label.comment" />
        </Text>
      </Button>
      <Button color="medium" fill="clear" size="small" className="mr-s">
        <Icon slot="start" icon={icShare} />
        <Text as="span" color="medium">
          <Trans id="label.share" />
        </Text>
      </Button>
    </div>
    <Button color="medium" fill="clear" size="small" slot="end">
      <Icon slot="start" icon={icDots} />
      <Text as="span" color="medium">
        <Trans id="label.more" />
      </Text>
    </Button>
  </div>
);
