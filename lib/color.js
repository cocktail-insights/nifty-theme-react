const BASE = {
  PRIMARY: '#579ddb',
  INFO: '#3db8da',
  SUCCESS: '#8cc74f',
  MINT: '#3acaa1',
  WARNING: '#f0a636',
  DANGER: '#f75d3f',
  PINK: '#df74a1',
  PURPLE: '#98518e',
  DARK: '#2e3235',
  GRAY_DARK: '#c3cedb',
  GRAY: '#e3e8ee',
  GRAY_LIGHT: '#f3f5f8',
  LIGHT: '#fff',
};

/**
 * Blue colors as used by Ad Geek
 * to be used as shades of PRIMARY
 **/
const BLUE = {
  DEFAULT: '#107FF2',
  LIGHT: '#369442',
  LIGHTER: '#62a8f1',
  DARK: '#0371e3',
  DARKER: '#034e9b',
};

/**
 * Orange colors to be used as shades of
 * warning
 */
const ORANGE = {
  DEFAULT: '#ff9900',
  DARK: '#ee8e00',
  LIGHT: '#ffa929',
  LIGHTER: '#ffbd5b',
};

/**
 * Mint colors to be used as shades of
 * mint
 */
const MINT = {
  DEFAULT: '#00f1bc',
  DARK: '#00d6a6',
  DARKER: '#009573',
};

/**
 * Red colors to be used as shades of
 * red
 */
const RED = {
  DEFAULT: '#fd0028',
  DARK: '#da0022',
  LIGHT: '#fd546f',
};

/**
 * Green colors to be used as shades of
 * success
 */
const GREEN = {
  DEFAULT: '#43f900',
  DARK: '#40ee00',
  DARKER: '#35c500',
  LIGHT: '#80f953',
};

const PINK = {
  DEFAULT: '#f500b2',
  DARK: '#e200a4',
  DARKER: '#ac007d',
  LIGHT: '#f521bb',
  LIGHTER: '#f451c7',
};

const PURPLE = {
  DEFAULT: '#8a11f2',
  DARK: '#8204ef',
  DARKER: '#5a03a6',
  LIGHT: '#9e3df3',
  LIGHTER: '#b368f3',
};

const APP = {
  BLUE,
  ORANGE,
  MINT,
  RED,
  GREEN,
  PINK,
  PURPLE,
};

/**
 * Color
 */
export default {
  BASE,
  ...APP,
};

