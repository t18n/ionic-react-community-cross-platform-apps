import { JSX } from '@ionic/core';
import { IonAvatar, IonImg, IonThumbnail } from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Types
 */
type AvatarProps = JSX.IonAvatar &
  HTMLAttributes<HTMLIonAvatarElement> & {
    children: ReactNode;
  };

type ImgProps = JSX.IonImg & HTMLAttributes<HTMLIonImgElement>;

type ThumbnailProps = JSX.IonThumbnail & HTMLAttributes<HTMLIonThumbnailElement>;

/**
 * Components
 */
export const Avatar = (props: AvatarProps) => {
  return <IonAvatar {...props} />;
};

export const Img = (props: ImgProps) => {
  return <IonImg {...props} />;
};

export const Thumbnail = (props: ThumbnailProps) => {
  return <IonThumbnail {...props} />;
};
