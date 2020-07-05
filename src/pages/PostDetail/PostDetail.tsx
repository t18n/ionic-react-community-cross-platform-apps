import './PostDetail.scss';

import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import faker from 'faker';
import { expand } from 'ionicons/icons';
import React from 'react';

import PostComments from '../../components/PostComments';
import PostItem, { postItems } from '../../components/PostItem';
import PostReactions from '../../components/PostReactions/PostReactions';

type Props = {
  history: any;
};

const PostDetail = ({ history }: Props) => {
  const goToProfile = () => {
    history.push('/profile');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="no-border" color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={expand} mode="ios" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {postItems.map((post, i) => (
          <PostItem
            key={i}
            onClickDetail={post.onClickDetail}
            onClickProfile={post.onClickProfile}
            reactionCount={post.reactionCount}
            commentCount={post.commentCount}
            summary={post.summary}
            editTimestamp={post.editTimestamp}
            avatar={post.avatar}
            badge={post.badge}
            firstName={post.firstName}
            cover={post.cover}
          />
        ))}
        <PostReactions />
        <PostComments />
      </IonContent>

      <IonFooter className="footer-shadow no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonAvatar className="toolbar-avatar thumbnail-tiny">
              <img src={faker.image.avatar()} alt="" />
            </IonAvatar>
          </IonButtons>

          <IonInput type="text" placeholder="Leave your thoughts here..."></IonInput>

          <IonButtons slot="end">
            <IonButton fill="clear" color="medium">
              <strong>Post</strong>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default PostDetail;
