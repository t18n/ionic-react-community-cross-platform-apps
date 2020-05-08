import './styles/index.min.css';

import { IonHeader, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { FC } from 'react';

import locales, { LocaleId } from '../../settings/locale';
import { activateLanguage } from '../I18n/utils';
import mcl from './styles/index.pcss.json';

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader translucent={true} className={mcl.header}>
      <IonToolbar className={mcl.toolbar}>
        <IonTitle slot="start">{title}</IonTitle>
        <IonSelect
          value={LocaleId.EN}
          placeholder="Language"
          onIonChange={(e) => activateLanguage(e.detail.value)}
          slot="end"
        >
          {Object.keys(locales).map((locale) => (
            <IonSelectOption key={locale} value={locales[locale].id}>
              {locales[locale].name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonToolbar>
    </IonHeader>
  );
};
