import React, { useState } from 'react';

import { Button } from '../Button';
import { Row } from '../Layout/Grid';
import { Toast } from '.';

export default {
  title: 'Toast',
  component: Toast,
};

export const ToastExample = () => {
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  return (
    <Row>
      <Button onClick={() => setShowToast1(true)} expand="block">
        Show Toast 1
      </Button>
      <Button onClick={() => setShowToast2(true)} expand="block">
        Show Toast 2
      </Button>
      <Toast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Your settings have been saved."
        duration={200}
      />

      <Toast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Click to Close"
        position="top"
        buttons={[
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            },
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            },
          },
        ]}
      />
    </Row>
  );
};
