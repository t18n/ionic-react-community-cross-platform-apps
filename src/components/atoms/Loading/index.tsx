import { JSX } from '@ionic/core';
import {
  IonLoading,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonSkeletonText,
  IonSpinner,
} from '@ionic/react';
import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Types
 */
type RefresherProps = JSX.IonRefresher &
  HTMLAttributes<HTMLIonRefresherElement> & {
    children: ReactNode;
    onRefresh: (e?: any) => void;
  };

type RefresherContentProps = JSX.IonRefresherContent &
  HTMLAttributes<HTMLIonRefresherContentElement>;

type LoadingProps = JSX.IonLoading &
  HTMLAttributes<HTMLIonLoadingElement> & {
    isOpen: boolean;
    onDidDismiss?: (e?: any) => void;
  };

type ProgressBarProps = JSX.IonProgressBar & HTMLAttributes<HTMLIonProgressBarElement>;
type SkeletonTextProps = JSX.IonSkeletonText & HTMLAttributes<HTMLIonSkeletonTextElement>;
type SpinnerProps = JSX.IonSpinner & HTMLAttributes<HTMLIonSpinnerElement>;

/**
 * Components
 */
export const Refresher = (props: RefresherProps) => {
  return <IonRefresher {...props} />;
};

export const RefresherContent = (props: RefresherContentProps) => {
  return <IonRefresherContent {...props} />;
};

export const Loading = (props: LoadingProps) => {
  return <IonLoading {...props} />;
};

export const ProgressBar = (props: ProgressBarProps) => {
  return <IonProgressBar {...props} />;
};

export const SkeletonText = (props: SkeletonTextProps) => {
  return <IonSkeletonText {...props} />;
};

export const Spinner = (props: SpinnerProps) => {
  return <IonSpinner {...props} />;
};
