import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PlusIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
    viewBox="0 0 32 32"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M16.25 7v18M25 16H7"
    />
  </Svg>
);
export default PlusIcon;
