import Typography from 'typography'

const baseFontStack = [
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

const typography = new Typography({
  googleFonts: [
    {
      name: 'Overpass',
      styles: ['400', '700'],
    },
    {
      name: 'Overpass Mono',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Overpass'].concat(baseFontStack),
  bodyFontFamily: ['Overpass Mono'].concat(baseFontStack),
})

export default typography
