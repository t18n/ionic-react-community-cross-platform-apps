import './index.min.css';

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

type LandingProps = {
  history: any;
};

export const Landing = ({ history }: LandingProps) => {
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
        <div className="landing-slide vertical-layout">
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
                  <h2 className="logo">
                    <Icon icon={logo} color="primary" />
                  </h2>
                </div>
              </Slide>
              <Slide>
                <div className="slide-inner">
                  <Text color={'white'}>
                    <h2>
                      Create your
                      <br />
                      professional profile
                    </h2>
                  </Text>

                  <div className="panel-landing user-card">
                    <div className="user-profile">
                      <Avatar className="user-image float">
                        <img src={faker.image.avatar()} alt="" />
                      </Avatar>
                      <h3>{faker.name.firstName()}</h3>
                      <div className="m-b-xs">{faker.name.jobDescriptor()}</div>
                      <Text color="medium">
                        <div className="text-sm">{faker.address.county()}</div>
                      </Text>
                    </div>
                    <div className="horizontal-line"></div>
                    <Button expand="block" fill="clear" color="primary">
                      Connect
                    </Button>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h2>
                      Connect and keep in touch
                      <br />
                      with your network
                    </h2>
                  </Text>

                  <div className="chat">
                    <div className="incoming">
                      <Avatar className="user-image small">
                        <img src={faker.image.avatar()} alt="" />
                      </Avatar>
                      <div className="message-group">
                        <div className="message">Congrats on your new role!</div>
                      </div>
                    </div>

                    <div className="outgoing">
                      <div className="message-group">
                        <div className="message">Thanks, sure!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div className="slide-inner">
                  <Text color="white">
                    <h2>
                      Connect people
                      <br />
                      to share knowledge
                    </h2>
                  </Text>

                  <div className="panel-landing">
                    <List className="m-n">
                      <Item lines="none">
                        <Avatar slot="start">
                          <img src={faker.image.avatar()} alt="" />
                        </Avatar>
                        <Label>
                          <span className="text-sm">Joe recommends</span>
                        </Label>
                      </Item>

                      <Item lines="none">
                        <Icon icon={icCheck} color="medium" slot="start" />
                        <Label>
                          <span className="text-sm font-bold">You next takeaway</span>
                        </Label>
                      </Item>
                      <Item lines="none">
                        <Icon icon={icCheck} color="medium" slot="start" />
                        <Label>
                          <span className="text-sm font-bold">You next life changing moment</span>
                        </Label>
                      </Item>
                    </List>
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

export default Landing;
