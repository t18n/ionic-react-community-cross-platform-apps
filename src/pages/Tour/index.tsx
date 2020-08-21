import './index.min.css';

import { Trans } from '@lingui/macro';
import logo from 'assets/brand/logo.svg';
import { Button } from 'components/atoms/Button';
import { icCheck, Icon, icUser } from 'components/atoms/Icon';
import { Item, Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Page } from 'components/atoms/Layout/Page';
import { List } from 'components/atoms/List';
import { Avatar } from 'components/atoms/Media';
import { Modal } from 'components/atoms/Modal';
import { Slide, Slides } from 'components/atoms/Slide';
import { Text } from 'components/atoms/Text';
import faker from 'faker';
import { Login } from 'pages/Login';
import React, { useRef, useState } from 'react';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

type TourProps = {
  history: any;
};

export const Tour = ({ history }: TourProps) => {
  const ionSlidesRef = useRef<HTMLIonSlidesElement>();
  const [activeIndex, setActiveIndex] = useState(slideOpts.initialSlide);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const handleOnSlided = () => {
    if (ionSlidesRef && ionSlidesRef.current) {
      ionSlidesRef.current.getActiveIndex().then((index: number) => {
        setActiveIndex(index);
      });
    }
  };

  const onLogin = () => {
    setIsOpenLogin(false);
    history.push('/home', { direction: 'none' });
  };

  return (
    <Page>
      <Modal isOpen={isOpenLogin}>
        <Login onClose={() => setIsOpenLogin(false)} onLogin={onLogin} history={history} />
      </Modal>

      <Content className={activeIndex > 0 ? 'bg-primary' : ''}>
        <div className="tour-slide vertical-layout">
          <div className="slides-container">
            <Slides
              className={`slides-intro${activeIndex > 0 ? ' inverse' : ''}`}
              pager
              options={slideOpts}
              onSlideDidChange={handleOnSlided}
              ref={ionSlidesRef}
            >
              <Slide>
                <div className="slide-inner">
                  <Icon icon={logo} color="primary" />
                  <h2>
                    <Trans id="tour.main.headline" />
                  </h2>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h2>
                      <Trans id="tour.explore.headline" />
                    </h2>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.explore.description" />
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h2>
                      <Trans id="tour.share.headline" />
                    </h2>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.share.description" />
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h2>
                      <Trans id="tour.learnAndRetain.headline" />
                    </h2>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.learnAndRetain.description" />
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h2>
                      <Trans id="tour.buildALibrary.headline" />
                    </h2>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.buildALibrary.description" />
                  </div>
                </div>
              </Slide>
            </Slides>
          </div>

          <div className="buttons-container ion-padding">
            <Button
              onClick={() => setIsOpenLogin(true)}
              expand="block"
              color={activeIndex > 0 ? 'white' : 'primary'}
              fill={activeIndex > 0 ? 'outline' : 'solid'}
              className="ion-margin-bottom"
            >
              Join now
            </Button>
            <Button
              onClick={() => setIsOpenLogin(true)}
              expand="block"
              fill={'outline'}
              color={activeIndex > 0 ? 'white' : 'primary'}
              className="ion-margin-bottom"
            >
              <Icon slot="start" icon={icUser} size="small" color="danger" />
              Login
            </Button>
            <Button
              onClick={() => setIsOpenLogin(true)}
              expand="block"
              fill={'clear'}
              color={activeIndex > 0 ? 'white' : 'primary'}
              className="ion-margin-bottom"
            >
              Sign in
            </Button>
          </div>
        </div>
      </Content>
    </Page>
  );
};

export default Tour;
