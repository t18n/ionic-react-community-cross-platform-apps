import React, { useState } from 'react';

import { Button } from '../Button';
import { Col, Row } from '../Layout/Grid';
import { Alert } from '.';

export default {
  title: 'Alert',
  component: Alert,
};

export const All = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);

  return (
    <Row>
      <Col size="2">
        <Button onClick={() => setShowAlert1(true)} expand="block">
          Normal Alert
        </Button>
        <Button onClick={() => setShowAlert2(true)} expand="block">
          With more actions
        </Button>
        <Button onClick={() => setShowAlert3(true)} expand="block">
          Confirm
        </Button>
        <Button onClick={() => setShowAlert4(true)} expand="block">
          With form
        </Button>
        <Button onClick={() => setShowAlert5(true)} expand="block">
          With Radio group
        </Button>
        <Button onClick={() => setShowAlert6(true)} expand="block">
          With checkbox group
        </Button>
        <Alert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass="my-custom-class"
          header={'Alert'}
          subHeader={'Subtitle'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />

        <Alert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass="my-custom-class"
          header={'Alert'}
          subHeader={'Subtitle'}
          message={'This is an alert message.'}
          buttons={['Cancel', 'Open Modal', 'Delete']}
        />

        <Alert
          isOpen={showAlert3}
          onDidDismiss={() => setShowAlert3(false)}
          cssClass="my-custom-class"
          header={'Confirm!'}
          message={'Message <strong>text</strong>!!!'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              },
            },
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay');
              },
            },
          ]}
        />

        <Alert
          isOpen={showAlert4}
          onDidDismiss={() => setShowAlert4(false)}
          cssClass="my-custom-class"
          header={'Prompt!'}
          inputs={[
            {
              name: 'name1',
              type: 'text',
              placeholder: 'Placeholder 1',
            },
            {
              name: 'name2',
              type: 'text',
              id: 'name2-id',
              value: 'hello',
              placeholder: 'Placeholder 2',
            },
            {
              name: 'name3',
              value: 'http://ionicframework.com',
              type: 'url',
              placeholder: 'Favorite site ever',
            },
            // input date with min & max
            {
              name: 'name4',
              type: 'date',
              min: '2017-03-01',
              max: '2018-01-12',
            },
            // input date without min nor max
            {
              name: 'name5',
              type: 'date',
            },
            {
              name: 'name6',
              type: 'number',
              min: -5,
              max: 10,
            },
            {
              name: 'name7',
              type: 'number',
            },
            {
              name: 'name8',
              type: 'password',
              placeholder: 'Advanced Attributes',
            },
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              },
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
              },
            },
          ]}
        />

        <Alert
          isOpen={showAlert5}
          onDidDismiss={() => setShowAlert5(false)}
          cssClass="my-custom-class"
          header={'Radio'}
          inputs={[
            {
              name: 'radio1',
              type: 'radio',
              label: 'Radio 1',
              value: 'value1',
              checked: true,
            },
            {
              name: 'radio2',
              type: 'radio',
              label: 'Radio 2',
              value: 'value2',
            },
            {
              name: 'radio3',
              type: 'radio',
              label: 'Radio 3',
              value: 'value3',
            },
            {
              name: 'radio4',
              type: 'radio',
              label: 'Radio 4',
              value: 'value4',
            },
            {
              name: 'radio5',
              type: 'radio',
              label: 'Radio 5',
              value: 'value5',
            },
            {
              name: 'radio6',
              type: 'radio',
              label: 'Radio 6',
              value: 'value6',
            },
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              },
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
              },
            },
          ]}
        />

        <Alert
          isOpen={showAlert6}
          onDidDismiss={() => setShowAlert6(false)}
          cssClass="my-custom-class"
          header={'Checkbox'}
          inputs={[
            {
              name: 'checkbox1',
              type: 'checkbox',
              label: 'Checkbox 1',
              value: 'value1',
              checked: true,
            },
            {
              name: 'checkbox2',
              type: 'checkbox',
              label: 'Checkbox 2',
              value: 'value2',
            },
            {
              name: 'checkbox3',
              type: 'checkbox',
              label: 'Checkbox 3',
              value: 'value3',
            },
            {
              name: 'checkbox4',
              type: 'checkbox',
              label: 'Checkbox 4',
              value: 'value4',
            },
            {
              name: 'checkbox5',
              type: 'checkbox',
              label: 'Checkbox 5',
              value: 'value5',
            },
            {
              name: 'checkbox6',
              type: 'checkbox',
              label: 'Checkbox 6',
              value: 'value6',
            },
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              },
            },
            {
              text: 'Ok',
              handler: () => {
                console.log('Confirm Ok');
              },
            },
          ]}
        />
      </Col>
    </Row>
  );
};
