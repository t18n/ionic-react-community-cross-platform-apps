import React from 'react';

type AppContext = {
  modals: {
    newPost: boolean;
  };
  openModal: (target: string) => void;
  closeModal: (target: string) => void;
};

export const Settings = React.createContext<AppContext>({
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
