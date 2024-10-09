import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
const ArchiveIcon = (props: SvgProps) => (
  <Svg width={32} height={27} fill="none" {...props}>
    <Path
      stroke="#000"
      d="M1.097 25v-8.557a1 1 0 0 1 .052-.32L5.006 4.682A1 1 0 0 1 5.953 4h20.288a1 1 0 0 1 .948.68l3.856 11.444a1 1 0 0 1 .052.319V25a1 1 0 0 1-1 1h-28a1 1 0 0 1-1-1Z"
    />
    <Path
      stroke="#000"
      d="M1.097 17h9.28a1 1 0 0 1 .948.684l.544 1.632a1 1 0 0 0 .949.684h6.558a1 1 0 0 0 .949-.684l.544-1.632a1 1 0 0 1 .949-.684h9.279"
    />
    <Circle cx={26.097} cy={5} r={5} fill="#FF2D2D" />
  </Svg>
);
export default ArchiveIcon;
