import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
const PaginationIcon = (props: SvgProps) => (
  <Svg width={10} height={10} fill="none" {...props}>
    <Circle cx={5} cy={5} r={4.5} stroke="#000" />
  </Svg>
);
export default PaginationIcon;
