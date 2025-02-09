import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const ChevronDownIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
    viewBox="0 0 24 24"
  >
    <G clipPath="url(#a)">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.333 8.333 12 15l6.667-6.667"
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
export default ChevronDownIcon;
