import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  flexGrow,
  flexBasis,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  textTransform,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from './styled-system'

type Props = { theme: any }

const themed = (key: string) => (props: Props) => props.theme[key]

export const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  flexGrow,
  flexBasis,
  opacity,
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed('Box')
)

Box.propTypes = {
  ...flexGrow.propTypes,
  ...flexBasis.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
}

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
)

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
}

export const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  textTransform,
  lineHeight,
  letterSpacing,
  themed('Text')
)

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textTransform.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
}

export const Heading = styled(Text)(themed('Heading'))

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
}

export const Link = styled(Box)(themed('Link'))

Link.defaultProps = {
  as: 'a',
  color: 'blue',
}

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  themed('Button')
)

Button.propTypes = {
  ...fontWeight.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...buttonStyle.propTypes,
}

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  border: 0,
  borderRadius: 4,
}

export const Image = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  height,
  borderRadius,
  themed('Image')
)

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes,
}

Image.defaultProps = {
  as: 'img',
  m: 0,
}

const cards = variant({ key: 'cards' })

export const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  cards,
  themed('Card')
)

Card.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...opacity.propTypes,
  ...cards.propTypes,
}
