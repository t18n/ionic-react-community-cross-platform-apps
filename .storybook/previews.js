import '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole, setConsoleOptions } from '@storybook/addon-console';
import { MemoryRouter } from 'react-router-dom';
import viewports from './viewports';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  controls: { expanded: true },
  viewport: {
    ...MINIMAL_VIEWPORTS,
    ...viewports,
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      },
    ],
  }
};

// Enable HMR messages
const setConsoleOptions = setConsoleOptions({
  panelExclude: [],
});

// Decorators are wrapper components or Storybook decorators that wrap a story
// Add a decorator globally for all stories
const withThemeProvider = (story, context) => {
  return withConsole()(<MemoryRouter>{story}</MemoryRouter>)(context);
};

export const decorators = [
  setConsoleOptions,
  withA11y,
  withThemeProvider
];