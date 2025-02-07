import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const MyIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...rest}
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path
        strokeLinejoin="round"
        d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      />
      <Path d="M5 21c.194-2.333.583-7 7-7s6.806 4.667 7 7" />
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
export default MyIcon;
