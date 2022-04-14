import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#eeaca3',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#69360c',
  barSelectedColor: '#ff665c',
  barBg: '#eeaca3',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Nebula storybook',
  brandUrl: 'https://nebula.zyxel.com/',
  brandImage: 'https://i0.wp.com/www.smechannels.com/wp-content/uploads/2016/11/zyxel.jpg?fit=610%2C380&ssl=1',
});
