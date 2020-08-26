import './index.min.css';

import {
  IonAvatar,
  IonBadge,
  IonButton,
  IonButtons,
  IonIcon,
  IonMenuToggle,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import faker from 'faker';
import { chatbubbles, menu } from 'ionicons/icons';
import React, { useState } from 'react';

type Props = {
  onFocus?: () => void;
  onBlur?: () => void;
};

const Topbar = ({ onBlur, onFocus }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const onSearchFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const onSearchBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  return (
    <IonToolbar className="toolbar-search border-0" color="primary">
      {!isFocused && (
        <IonButtons slot="start">
          <IonMenuToggle autoHide={false}>
            <IonButton>
              <IonAvatar className="button-avatar">
                <img src={faker.image.avatar()} alt="" />
                <div className="icon-menu">
                  <IonIcon icon={menu} color="primary" />
                </div>
              </IonAvatar>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
      )}

      <div className="searchbar-wrapper">
        <IonSearchbar
          placeholder="Search"
          showCancelButton="focus"
          onIonFocus={onSearchFocus}
          onIonCancel={onSearchBlur}
        />
      </div>

      {!isFocused && (
        <IonButtons slot="end" className="pos-rlt">
          <IonButton routerLink="/messaging">
            <IonIcon slot="icon-only" icon={chatbubbles} mode="ios" />
          </IonButton>
          <IonBadge className="badge-message" color="danger">
            2
          </IonBadge>
        </IonButtons>
      )}
    </IonToolbar>
  );
};

export default Topbar;
