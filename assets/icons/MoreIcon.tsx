import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';
const MoreTabIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Circle cx={16} cy={16} r={15.25} stroke="#363636" strokeWidth={1.5} />
    <Circle cx={16} cy={16} r={2} fill="#363636" />
    <Circle cx={23} cy={16} r={2} fill="#363636" />
    <Circle cx={9} cy={16} r={2} fill="#363636" />
  </Svg>
);
export default MoreTabIcon;
