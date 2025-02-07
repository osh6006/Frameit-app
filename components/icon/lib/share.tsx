import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const ShareIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...rest}
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M5.25 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM14.25 7.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM14.25 16.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM9.525 11.025l4.95-2.55M9.525 12.975l4.95 2.55" />
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
export default ShareIcon;
