import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const LocationIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <G
      stroke={color}
      strokeWidth={1.2}
      clipPath="url(#a)"
    >
      <Path d="m6.694 12.678 1.293 2.047a1 1 0 0 0 1.667.036l.729-1.049c2.356-3.39 4.749-8.4 1.408-10.826C11.044 2.344 10.065 2 8.793 2 6.892 2 5.7 2.768 4.981 3.82c-1.826 2.667-.013 6.126 1.713 8.858Z" />
      <Path d="M10.9 6.5a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          d="M0 0h18v18H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LocationIcon;
