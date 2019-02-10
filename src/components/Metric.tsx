import * as React from 'react'
import { Card, Text, Box } from '../utils/rebass'

interface IProps extends GetComponentProps<typeof Box> {
  name: string
  value: string | number
  type: string // 'percentage' | 'number' | 'currency'
}

const Metric: React.SFC<IProps> = ({ name, value, type, ...props }) => (
  <Card {...props} borderColor="black" my={[4, 4, 3]}>
    <Text lineHeight={1.15} textAlign={['center', 'center', 'left']}>
      <Text fontSize={5}>{value}</Text>
      <Text textTransform="uppercase" fontWeight="bold" opacity={0.5}>
        {name}
      </Text>
    </Text>
  </Card>
)

export default Metric
