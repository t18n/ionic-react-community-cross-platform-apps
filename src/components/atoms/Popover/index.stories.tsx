/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';

import { Button } from '../Button';
import { Popover } from '.';

export default {
  title: 'Popover',
  component: Popover,
};

export const PopoverExample: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <Popover
        isOpen={showPopover}
        cssClass="custom-class"
        onDidDismiss={(e) => setShowPopover(false)}
      >
        <p>This is popover content</p>
      </Popover>
      <Button onClick={() => setShowPopover(true)}>Show Popover</Button>
    </>
  );
};
