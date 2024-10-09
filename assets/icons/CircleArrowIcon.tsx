import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
const CircleArrowIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Circle cx={16} cy={16} r={15.5} stroke="#000" />
    <Path
      fill="#000"
      d="M17.431 23.877a.42.42 0 0 1-.127-.298.41.41 0 0 1 .127-.298l7.084-6.86H6.435a.442.442 0 0 1-.308-.123.415.415 0 0 1 0-.596.442.442 0 0 1 .308-.123h18.08l-7.084-6.86a.421.421 0 0 1-.127-.298.41.41 0 0 1 .127-.298A.436.436 0 0 1 17.74 8a.447.447 0 0 1 .308.123l7.825 7.58A.421.421 0 0 1 26 16a.41.41 0 0 1-.128.298l-7.825 7.579a.434.434 0 0 1-.308.123.447.447 0 0 1-.308-.123Z"
    />
  </Svg>
);
export default CircleArrowIcon;
