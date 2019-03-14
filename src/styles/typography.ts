import Typography from 'typography'
import theme from './theme'

const baseFontStack = [
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

export const headerFontFamily = {
    name: 'Catamaran',
    styles: ['900'],
  },
  subtitleFontFamily = {
    name: 'Overpass Mono',
    styles: ['400', '700'],
  },
  bodyFontFamily = {
    name: 'Overpass Mono',
    styles: ['400', '700'],
  }

const typography = new Typography({
  // Size,
  baseFontSize: '16px',
  // Colors
  bodyColor: theme.Text.color,
  headerColor: theme.Heading.color,
  // Fonts
  googleFonts: [headerFontFamily, subtitleFontFamily, bodyFontFamily],
  headerWeight: 900,
  headerFontFamily: [headerFontFamily.name].concat(baseFontStack),
  bodyFontFamily: [bodyFontFamily.name].concat(baseFontStack),
})

export default typography
