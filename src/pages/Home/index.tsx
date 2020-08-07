import './index.min.css';

import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonText } from '@ionic/react';
import PostItem, { postItems } from 'components/molecules/PostItem';
import SearchSuggestions from 'components/organisms/SearchSuggestions';
import SkeletonPost from 'components/organisms/SkeletonPost';
import Topbar from 'components/organisms/Topbar';
import { camera, create, videocam } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

type HomeProps = {
  history: any;
};

export const Home = ({ history }: HomeProps) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  const goToProfile = () => {
    history.push('/profile');
  };

  const goToPostDetail = () => {
    history.push('/post/1');
  };

  const handleOnFocus = () => {
    setIsSearchFocused(true);
  };

  const handleOnBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <Topbar onFocus={handleOnFocus} onBlur={handleOnBlur} />
      </IonHeader>

      <IonContent className={!isSearchFocused ? 'ion-hide' : ''}>
        <div className="content-overlay">
          <SearchSuggestions />
        </div>
      </IonContent>

      {isLoading && (
        <IonContent className="bg-light">
          <SkeletonPost />
        </IonContent>
      )}

      {!isLoading && (
        <IonContent className={`bg-light${isSearchFocused ? ' ion-hide' : ''}`}>
          <div className="toolbar-post">
            <IonButton color="white" className="button-post post-input">
              <div className="button-inner-left">
                <IonIcon color="medium" icon={create} mode="md" />
                <IonText color="medium">Write a post</IonText>
              </div>
            </IonButton>
            <IonButton color="white" className="button-post">
              <IonIcon color="medium" icon={videocam} mode="ios" />
            </IonButton>
            <IonButton color="white" className="button-post">
              <IonIcon color="medium" icon={camera} mode="ios" />
            </IonButton>
          </div>

          <div className="post-list">
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
          </div>
        </IonContent>
      )}
    </IonPage>
  );
};
