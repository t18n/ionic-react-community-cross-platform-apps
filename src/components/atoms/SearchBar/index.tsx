import './index.min.css';

import { JSX } from '@ionic/core';
import { IonSearchbar } from '@ionic/react';
import React, { HTMLAttributes } from 'react';

type SearchBarProps = JSX.IonSearchbar & HTMLAttributes<HTMLIonSearchbarElement>;

export const SearchBar = (props: SearchBarProps) => {
  return <IonSearchbar {...props} />;
};
