import './index.min.css';

import { JSX } from '@ionic/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';
import React, { HTMLAttributes } from 'react';

/**
 * Types
 */
type CardProps = JSX.IonCard & HTMLAttributes<HTMLIonCardElement>;
type CardContentProps = JSX.IonCardContent & HTMLAttributes<HTMLIonCardContentElement>;
type CardHeaderProps = JSX.IonCardHeader & HTMLAttributes<HTMLIonCardHeaderElement>;
type CardTitleProps = JSX.IonCardTitle & HTMLAttributes<HTMLIonCardTitleElement>;
type CardSubtitleProps = JSX.IonCardSubtitle & HTMLAttributes<HTMLIonCardSubtitleElement>;

/**
 * Components
 */
export const Card = (props: CardProps) => {
  return <IonCard {...props} />;
};

export const CardTitle = (props: CardTitleProps) => {
  return <IonCardTitle {...props} />;
};

export const CardSubtitle = (props: CardSubtitleProps) => {
  return <IonCardSubtitle {...props} />;
};

export const CardContent = (props: CardContentProps) => {
  return <IonCardContent {...props} />;
};

export const CardHeader = (props: CardHeaderProps) => {
  return <IonCardHeader {...props} />;
};
