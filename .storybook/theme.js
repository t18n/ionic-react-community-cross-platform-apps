import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#009444',
  colorSecondary: '#39b54a',

  // Typography
  fontBase: 'Roboto, sans-serif',
  fontCode: '"Roboto Mono", monospace',

  // Text colors
  textColor: '#212121',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#343434',
  barSelectedColor: '#212121',
  barBg: '#F2F0F0',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Brightizen',
  brandUrl: 'https://brightizen.com',
  brandImage: '',
});
