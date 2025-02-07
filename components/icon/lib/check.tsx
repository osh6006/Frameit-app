import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CheckIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...rest}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m4 9 3.555 4.443a.5.5 0 0 0 .817-.051L13.5 5"
    />
  </Svg>
);
export default CheckIcon;
