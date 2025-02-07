import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CalendarIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <Path
      stroke={color}
      fillRule="evenodd"
      d="M16 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h6V3a1 1 0 0 1 1-1ZM7 6a1 1 0 0 0 2 0h6a1 1 0 1 0 2 0h1a1 1 0 0 1 1 1v2H5V7a1 1 0 0 1 1-1h1Zm12 5v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8h14Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CalendarIcon;
