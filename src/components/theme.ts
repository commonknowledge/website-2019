import { util } from 'styled-system'

const red = '#db0047ff'
const green = '#00dca4ff'
const background = '#FBFBFB'
const lightgray = '#f6f6ff'
const primary = green

const theme = {
  breakpoints: util.defaultBreakpoints,
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    background,
    primary,
    green,
    red,
    lightgray,
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
