import React, { useState } from 'react';

import { Button } from '../Button';
import { Content } from '../Layout/Content';
import { Modal } from '.';

export default {
  title: 'Modal',
  component: Modal,
};

export const Example = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Content>
      <Modal isOpen={showModal} cssClass="my-custom-class">
        <p>This is modal content</p>
        <Button onClick={() => setShowModal(false)}>Close Modal</Button>
      </Modal>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
    </Content>
  );
};
