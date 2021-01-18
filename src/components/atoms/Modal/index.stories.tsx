import { createAnimation } from '@ionic/react';
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

export const WithCustomAnimation = () => {
  const [showModal, setShowModal] = useState(false);

  const enterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
      .addElement(baseEl.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(baseEl.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: any) => {
    return enterAnimation(baseEl).direction('reverse');
  };
  return (
    <Content>
      <Modal
        isOpen={showModal}
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
        cssClass="my-custom-class"
      >
        <p>This is modal with custom animation</p>
        <Button onClick={() => setShowModal(false)}>Close Modal</Button>
      </Modal>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
    </Content>
  );
};
