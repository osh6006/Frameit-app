import * as React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Path,
  SvgProps,
} from 'react-native-svg';

const MeatBallVerticalIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <G
      fill={color}
      clipPath="url(#a)"
    >
      <Circle
        cx={16}
        cy={9}
        r={2}
      />
      <Circle
        cx={16}
        cy={16}
        r={2}
      />
      <Circle
        cx={16}
        cy={23}
        r={2}
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
export default MeatBallVerticalIcon;
