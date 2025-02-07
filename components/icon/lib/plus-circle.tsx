import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  ClipPath,
} from 'react-native-svg';
const PlusCircleIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
    viewBox="0 0 32 32"
  >
    <G
      stroke={color}
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Circle
        cx={16}
        cy={16}
        r={11}
      />
      <Path
        strokeLinecap="round"
        d="M16 10v12M22 16H10"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          d="M0 0h32v32H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PlusCircleIcon;
