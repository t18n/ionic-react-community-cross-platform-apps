/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RefresherEventDetail } from '@ionic/core';
import React, { useState } from 'react';

import { Button } from '../Button';
import { icCar, icChevronDown, Icon } from '../Icon';
import { Item, Label } from '../Item';
import { Row } from '../Layout/Grid/index';
import { List, ListHeader } from '../List';
import { Avatar, Thumbnail } from '../Media';
import { Loading, ProgressBar, Refresher, RefresherContent, SkeletonText, Spinner } from '.';

export default {
  title: 'Loading',
  component: Refresher,
};

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

export const RefresherExample = () => (
  <>
    {/*-- Default Refresher --*/}
    <Row>
      <Refresher slot="fixed" onRefresh={doRefresh}>
        <RefresherContent></RefresherContent>
      </Refresher>
    </Row>

    {/*-- Custom Refresher Properties --*/}
    <Row>
      <Refresher slot="fixed" onRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
        <RefresherContent></RefresherContent>
      </Refresher>
    </Row>

    {/*-- Custom Refresher Content --*/}
    <Row>
      <Refresher slot="fixed" onRefresh={doRefresh}>
        <RefresherContent
          pullingIcon={icChevronDown}
          pullingText="Pull to refresh"
          refreshingSpinner="circles"
          refreshingText="Refreshing..."
        ></RefresherContent>
      </Refresher>
    </Row>
  </>
);

export const SkeletonTextExample = () => {
  const [data, setData] = useState({
    heading: null,
    para1: null,
    para2: null,
  });

  setTimeout(() => {
    setData({
      heading: 'Normal text',
      para1: 'Lorem ipsum dolor sit amet, consectetur',
      para2: 'adipiscing elit.',
    });
  }, 5000);

  return (
    <Row>
      {data ? (
        <>
          <div className="ion-padding">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras
            iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam
            tincidunt tincidunt vehicula.
          </div>

          <List>
            <ListHeader>
              <Label>Data</Label>
            </ListHeader>
            <Item>
              <Avatar slot="start">
                <img src="./avatar.svg" />
              </Avatar>
              <Label>
                <h3>{data.heading}</h3>
                <p>{data.para1}</p>
                <p>{data.para2}</p>
              </Label>
            </Item>
            <Item>
              <Thumbnail slot="start">
                <img src="./thumbnail.svg" />
              </Thumbnail>
              <Label>
                <h3>{data.heading}</h3>
                <p>{data.para1}</p>
                <p>{data.para2}</p>
              </Label>
            </Item>
            <Item>
              <Icon icon={icCar} slot="start" />
              <Label>
                <h3>{data.heading}</h3>
                <p>{data.para1}</p>
                <p>{data.para2}</p>
              </Label>
            </Item>
          </List>
        </>
      ) : (
        <>
          <div className="ion-padding custom-skeleton">
            <SkeletonText animated style={{ width: '60%' }} />
            <SkeletonText animated />
            <SkeletonText animated style={{ width: '88%' }} />
            <SkeletonText animated style={{ width: '70%' }} />
            <SkeletonText animated style={{ width: '60%' }} />
          </div>

          <List>
            <ListHeader>
              <Label>
                <SkeletonText animated style={{ width: '20%' }} />
              </Label>
            </ListHeader>
            <Item>
              <Avatar slot="start">
                <SkeletonText animated />
              </Avatar>
              <Label>
                <h3>
                  <SkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <SkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <SkeletonText animated style={{ width: '60%' }} />
                </p>
              </Label>
            </Item>
            <Item>
              <Thumbnail slot="start">
                <SkeletonText animated />
              </Thumbnail>
              <Label>
                <h3>
                  <SkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <SkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <SkeletonText animated style={{ width: '60%' }} />
                </p>
              </Label>
            </Item>
            <Item>
              <SkeletonText animated style={{ width: '27px', height: '27px' }} slot="start" />
              <Label>
                <h3>
                  <SkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <SkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <SkeletonText animated style={{ width: '60%' }} />
                </p>
              </Label>
            </Item>
          </List>
        </>
      )}
    </Row>
  );
};

export const ProgressbarExample = () => (
  <Row>
    {/*-- Default Progressbar --*/}
    <ProgressBar></ProgressBar>
    <br />

    {/*-- Default Progressbar with 50 percent --*/}
    <ProgressBar value={0.5}></ProgressBar>
    <br />

    {/*-- Colorize Progressbar --*/}
    <ProgressBar color="primary" value={0.5}></ProgressBar>
    <br />
    <ProgressBar color="secondary" value={0.5}></ProgressBar>
    <br />

    {/*-- Other types --*/}
    <ProgressBar value={0.25} buffer={0.5}></ProgressBar>
    <br />
    <ProgressBar type="indeterminate"></ProgressBar>
    <br />
    <ProgressBar type="indeterminate" reversed={true}></ProgressBar>
    <br />
  </Row>
);

export const LoadingExample = () => {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 2000);

  return (
    <Row>
      <Button onClick={() => setShowLoading(true)}>Show Loading</Button>
      <Loading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={5000}
      />
    </Row>
  );
};

export const SpinnerExample = () => (
  <Row>
    {/*-- Default Spinner --*/}
    <Spinner />

    {/*-- Lines --*/}
    <Spinner name="lines" />

    {/*-- Lines Small --*/}
    <Spinner name="lines-small" />

    {/*-- Dots --*/}
    <Spinner name="dots" />

    {/*-- Bubbles --*/}
    <Spinner name="bubbles" />

    {/*-- Circles --*/}
    <Spinner name="circles" />

    {/*-- Crescent --*/}
    <Spinner name="crescent" />

    {/*-- Paused Default Spinner --*/}
    <Spinner paused />
  </Row>
);
