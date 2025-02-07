import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const TimeIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <G
      stroke={color}
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.667 7.667v5h4"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          d="M0 0h24v24H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TimeIcon;
