import React from 'react';

type SettingContextType = {
  modals: {
    newPost: boolean;
  };
  openModal: (target: string) => void;
  closeModal: (target: string) => void;
};

export const SettingContext = React.createContext<SettingContextType>({
  modals: {
    newPost: false,
  },
  openModal: () => {
    throw new Error('not implemented');
  },
  closeModal: () => {
    throw new Error('not implemented');
  },
});
