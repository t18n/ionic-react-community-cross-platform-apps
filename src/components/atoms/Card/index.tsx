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
  return <IonCard {...props}>{props.children}</IonCard>;
};

export const CardTitle = (props: CardTitleProps) => {
  return <IonCardTitle {...props}>{props.children}</IonCardTitle>;
};

export const CardSubtitle = (props: CardSubtitleProps) => {
  return <IonCardSubtitle {...props}>{props.children}</IonCardSubtitle>;
};

export const CardContent = (props: CardContentProps) => {
  return <IonCardContent {...props}>{props.children}</IonCardContent>;
};

export const CardHeader = (props: CardHeaderProps) => {
  return <IonCardHeader {...props}>{props.children}</IonCardHeader>;
};
