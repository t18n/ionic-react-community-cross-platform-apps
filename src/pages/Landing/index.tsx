import './index.min.css';

import {
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonSlide,
  IonSlides,
  IonText,
} from '@ionic/react';
import faker from 'faker';
import { briefcase, logoGoogle, logoLinkedin } from 'ionicons/icons';
import React from 'react';

import Login from '../Login';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

type Props = {
  history: any;
};

type State = {
  activeIndex: number;
  isOpenLogin: boolean;
};

class Landing extends React.Component<Props, State> {
  ionSlidesRef: React.RefObject<HTMLIonSlidesElement>;
  state = {
    activeIndex: slideOpts.initialSlide,
    isOpenLogin: false,
  };

  constructor(props: Props) {
    super(props);

    this.ionSlidesRef = React.createRef<HTMLIonSlidesElement>();
  }

  handleOnSlided = () => {
    if (this.ionSlidesRef && this.ionSlidesRef.current) {
      this.ionSlidesRef.current.getActiveIndex().then((index: number) => {
        this.setState({
          activeIndex: index,
        });
      });
    }
  };

  showLogin = () => {
    this.setState({
      isOpenLogin: true,
    });
  };

  closeLogin = () => {
    this.setState({
      isOpenLogin: false,
    });
  };

  onLogin = () => {
    this.setState(
      {
        isOpenLogin: false,
      },
      () => {
        this.props.history.push('/home', { direction: 'none' });
      }
    );
  };

  render() {
    const { activeIndex, isOpenLogin } = this.state;

    return (
      <IonPage>
        <IonModal isOpen={isOpenLogin}>
          <Login onClose={this.closeLogin} onLogin={this.onLogin} />
        </IonModal>

        <IonContent className={activeIndex > 0 ? 'bg-primary' : ''}>
          <div className="landing-slide vertical-layout">
            <div className="slides-container">
              <IonSlides
                className={`slides-intro${activeIndex > 0 ? ' inverse' : ''}`}
                pager
                options={slideOpts}
                onIonSlideDidChange={this.handleOnSlided}
                ref={this.ionSlidesRef}
              >
                <IonSlide>
                  <div className="slide-inner">
                    <h2 className="logo">
                      Career
                      <IonIcon icon={logoLinkedin} color="primary" />
                    </h2>
                  </div>
                </IonSlide>
                <IonSlide>
                  <div className="slide-inner">
                    <IonText color={'white'}>
                      <h2>
                        Create your
                        <br />
                        professional profile
                      </h2>
                    </IonText>

                    <div className="panel-landing user-card">
                      <div className="user-profile">
                        <IonAvatar className="user-image float">
                          <img src={faker.image.avatar()} alt="" />
                        </IonAvatar>
                        <h3>{faker.name.firstName()}</h3>
                        <div className="m-b-xs">{faker.name.jobDescriptor()}</div>
                        <IonText color="medium">
                          <div className="text-sm">{faker.address.county()}</div>
                        </IonText>
                      </div>
                      <div className="horizontal-line"></div>
                      <IonButton expand="block" fill="clear" color="primary">
                        Connect
                      </IonButton>
                    </div>
                  </div>
                </IonSlide>
                <IonSlide>
                  <div className="slide-inner">
                    <IonText color="white">
                      <h2>
                        Connect and keep in touch
                        <br />
                        with your network
                      </h2>
                    </IonText>

                    <div className="chat">
                      <div className="incoming">
                        <IonAvatar className="user-image small">
                          <img src={faker.image.avatar()} alt="" />
                        </IonAvatar>
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
                </IonSlide>
                <IonSlide>
                  <div className="slide-inner">
                    <IonText color="white">
                      <h2>
                        Find jobs through people
                        <br />
                        you know
                      </h2>
                    </IonText>

                    <div className="panel-landing">
                      <IonList className="m-n">
                        <IonItem lines="none">
                          <IonAvatar slot="start">
                            <img src={faker.image.avatar()} alt="" />
                          </IonAvatar>
                          <IonLabel>
                            <span className="text-sm">Hieu can connect you to 2 jobs</span>
                          </IonLabel>
                        </IonItem>

                        <IonItem lines="none">
                          <IonIcon icon={briefcase} color="medium" slot="start" />
                          <IonLabel>
                            <span className="text-sm font-bold">You next job</span>
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none">
                          <IonIcon icon={briefcase} color="medium" slot="start" />
                          <IonLabel>
                            <span className="text-sm font-bold">You next career move</span>
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </div>
                  </div>
                </IonSlide>
              </IonSlides>
            </div>
            <div className="buttons-container ion-padding">
              <IonButton
                onClick={this.showLogin}
                expand="block"
                color={activeIndex > 0 ? 'white' : 'primary'}
                fill={activeIndex > 0 ? 'outline' : 'solid'}
                className="ion-margin-bottom"
              >
                Join now
              </IonButton>
              <IonButton
                onClick={this.showLogin}
                expand="block"
                fill={'outline'}
                color={activeIndex > 0 ? 'white' : 'primary'}
                className="ion-margin-bottom"
              >
                <IonIcon slot="start" icon={logoGoogle} size="small" color="danger" />
                Login
              </IonButton>
              <IonButton
                onClick={this.showLogin}
                expand="block"
                fill={'clear'}
                color={activeIndex > 0 ? 'white' : 'primary'}
                className="ion-margin-bottom"
              >
                Sign in
              </IonButton>
            </div>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Landing;
