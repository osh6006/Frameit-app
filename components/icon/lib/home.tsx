import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const HomeIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2 10.145a3 3 0 0 1 1.223-2.417l7-5.145a3 3 0 0 1 3.554 0l7 5.145A3 3 0 0 1 22 10.145v9.132a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9.132Zm2.408-.806 7-5.145a1 1 0 0 1 1.184 0l7 5.145a1 1 0 0 1 .408.806v9.132a1 1 0 0 1-1 1h-3V15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5.277H5a1 1 0 0 1-1-1v-9.132a1 1 0 0 1 .408-.806ZM10 15h4v5h-4v-5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default HomeIcon;
