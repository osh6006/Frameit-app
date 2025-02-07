import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const ChevronRightIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <G clipPath="url(#a)">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="m7 4 5 5-5 5"
      />
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
export default ChevronRightIcon;
