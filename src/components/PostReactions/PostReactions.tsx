import './PostReactions.scss';

import { IonAvatar, IonButton, IonIcon } from '@ionic/react';
import faker from 'faker';
import { expand, thumbsUp } from 'ionicons/icons';
import React from 'react';

const PostReactions = () => {
  return (
    <div className="post-reactions">
      <div className="panel-title">Reactions</div>
      <div className="reactions-list">
        <IonAvatar className="reactor">
          <img src={faker.image.avatar()} alt="" />
          <div className="reaction-badge">
            <IonIcon icon={thumbsUp} />
          </div>
        </IonAvatar>
        <IonAvatar className="reactor">
          <img src={faker.image.avatar()} alt="" />
          <div className="reaction-badge">
            <IonIcon icon={thumbsUp} />
          </div>
        </IonAvatar>
        <IonAvatar className="reactor">
          <img src={faker.image.avatar()} alt="" />
          <div className="reaction-badge">
            <IonIcon icon={thumbsUp} />
          </div>
        </IonAvatar>
        <IonAvatar className="reactor">
          <img src={faker.image.avatar()} alt="" />
          <div className="reaction-badge">
            <IonIcon icon={thumbsUp} />
          </div>
        </IonAvatar>
        <IonButton className="reactor-expand" fill="clear" color="medium">
          <IonIcon slot="icon-only" icon={expand} mode="ios" />
        </IonButton>
      </div>
    </div>
  );
};

export default PostReactions;
