import './index.min.css';

import { t, Trans } from '@lingui/macro';
import { Button } from 'components/atoms/Button';
import { Icon, icUser } from 'components/atoms/Icon';
import { Content } from 'components/atoms/Layout/Content';
import { Page } from 'components/atoms/Layout/Page';
import { Logo } from 'components/atoms/Logo';
import { Slide, Slides } from 'components/atoms/Slide';
import { Text } from 'components/atoms/Text';
import React, { useRef, useState } from 'react';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

type TourProps = {
  history?: any;
};

export const Tour = (props: TourProps) => {
  const ionSlidesRef = useRef<HTMLIonSlidesElement>();
  const [activeIndex, setActiveIndex] = useState(slideOpts.initialSlide);

  const handleOnSlided = () => {
    if (ionSlidesRef && ionSlidesRef.current) {
      ionSlidesRef.current.getActiveIndex().then((index: number) => {
        setActiveIndex(index);
      });
    }
  };

  return (
    <Page title={t`page.title.welcome`}>
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
                  <Logo extraClasses="slide-inner__logo" />
                  <h3>
                    <Trans id="tour.main.headline" />
                  </h3>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h3>
                      <Trans id="tour.explore.headline" />
                    </h3>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.explore.description" />
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h3>
                      <Trans id="tour.share.headline" />
                    </h3>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.share.description" />
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h3>
                      <Trans id="tour.learnAndRetain.headline" />
                    </h3>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.learnAndRetain.description" />
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h3>
                      <Trans id="tour.buildALibrary.headline" />
                    </h3>
                  </Text>

                  <div className="panel-tour">
                    <Trans id="tour.buildALibrary.description" />
                  </div>
                </div>
              </Slide>
            </Slides>
          </div>

          <div className="buttons-container pa-m">
            <Button
              routerLink="/signup"
              expand="block"
              color={activeIndex > 0 ? 'white' : 'primary'}
              fill={activeIndex > 0 ? 'outline' : 'solid'}
              className="m--bottom"
            >
              Join now
            </Button>
            <Button
              routerLink="/login"
              expand="block"
              fill={'outline'}
              color={activeIndex > 0 ? 'white' : 'primary'}
              className="m--bottom"
            >
              <Icon slot="start" icon={icUser} size="small" color="danger" />
              Login
            </Button>
            <Button
              routerLink="/login"
              expand="block"
              fill={'clear'}
              color={activeIndex > 0 ? 'white' : 'primary'}
              className="m--bottom"
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
