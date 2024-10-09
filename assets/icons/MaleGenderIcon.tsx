import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const MaleGenderIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill="#363636"
      d="M11.25 0h-3a.752.752 0 0 0-.75.75c0 .413.338.75.75.75h1.185L6.457 4.478A4.123 4.123 0 0 0 0 7.874 4.123 4.123 0 0 0 4.125 12a4.123 4.123 0 0 0 3.397-6.465l2.978-2.97V3.75c0 .412.338.75.75.75s.75-.338.75-.75v-3a.752.752 0 0 0-.75-.75ZM4.125 10.5A2.628 2.628 0 0 1 1.5 7.875 2.628 2.628 0 0 1 4.125 5.25 2.628 2.628 0 0 1 6.75 7.875 2.628 2.628 0 0 1 4.125 10.5Z"
    />
  </Svg>
);
export default MaleGenderIcon;
