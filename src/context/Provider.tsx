import React from 'react';

import { SettingContext } from './Setting';

type State = {
  modals: Record<string, any>;
};

interface Props {}

export default class Provider extends React.Component<Props, State> {
  state = {
    modals: {
      newPost: false,
    },
  };

  render() {
    return (
      <SettingContext.Provider
        value={{
          modals: this.state.modals,
          openModal: (target: string) => {
            this.setState((prevState) => {
              return {
                modals: {
                  ...prevState.modals,
                  [target]: true,
                },
              };
            });
          },
          closeModal: (target: string) => {
            this.setState((prevState) => {
              return {
                modals: {
                  ...prevState.modals,
                  [target]: false,
                },
              };
            });
          },
        }}
      >
        {this.props.children}
      </SettingContext.Provider>
    );
  }
}
