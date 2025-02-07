import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const BookMarkIcon = ({
  width,
  height,
  color,
  strokeWidth,
  ...rest
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <G clipPath="url(#a)">
      <Path
        stroke={color}
        strokeWidth={strokeWidth || 2}
        d="M12 4H8.222A2.222 2.222 0 0 0 6 6.222v11.534c0 .92 1.053 1.44 1.785.883l3.541-2.7c.398-.303.95-.303 1.348 0l3.541 2.7A1.111 1.111 0 0 0 18 17.756V6.222A2.222 2.222 0 0 0 15.778 4H12Z"
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
export default BookMarkIcon;
