import './index.min.css';

import { JSX } from '@ionic/core';
import { IonSlide, IonSlides } from '@ionic/react';
import React, { ReactNode, RefAttributes } from 'react';

type SlideProps = JSX.IonSlide &
  RefAttributes<HTMLIonSlideElement> & {
    children: ReactNode;
  };

type SlidesProps = JSX.IonSlides &
  RefAttributes<HTMLIonSlidesElement> & {
    children: ReactNode;
    className?: string;
    onSlideDidChange?: () => void;
  };

export const Slides = (props: SlidesProps) => {
  return <IonSlides {...props} />;
};

export const Slide = (props: SlideProps) => {
  return <IonSlide {...props} />;
};
