import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const ReloadIcon = ({ width, height, color, ...rest }: SvgProps) => (
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
        d="M12.674 13.094a5.494 5.494 0 1 1 1.49-5.973m.336-2.998v3.052h-3.052"
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
export default ReloadIcon;
