import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const XIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M19 6 6 19M6 6l13 13" />
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
export default XIcon;
