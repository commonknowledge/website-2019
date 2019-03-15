import { util } from '../utils/styled-system'

// Primitive colours
// TODO: use
const white = '#FFF'
const offwhite = '#FBFBFB'
const mintGreen = '#00dca4ff'
const lightgray = '#f6f6ff'
const navy = '#001f3f'
const blue = '#0074D9'
const aqua = '#7FDBFF'
const teal = '#39CCCC'
const olive = '#3D9970'
const green = '#2ECC40'
const lime = '#01FF70'
const yellow = '#FFDC00'
const orange = '#FF851B'
const red = '#FF4136'
const maroon = '#85144b'
const fuschia = '#F012BE'
const purple = '#B10DC9'
const black = '#111111'
const gray = '#AAAAAA'
const silver = '#DDDDDD'

// Applied colours
const primary = black
const background = offwhite
const textColor = black

const theme = {
  breakpoints: util.defaultBreakpoints,
  // fontSizes: [12, 14, 16, 24, 32, 48, 64],
  fontSizes: [16, 20, 22, 24, 28, 36, 52, 68],
  colors: {
    background,
    primary,
    green: mintGreen,
    red,
    lightgray,
  },
  Heading: {
    color: textColor,
  },
  Text: {
    color: textColor,
  },
  Link: {
    color: primary,
    'color:active': primary,
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: red,
    },
    outline: {
      color: red,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
  },
}

export default theme
