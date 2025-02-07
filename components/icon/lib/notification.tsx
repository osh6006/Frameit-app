import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const NotificationIcon = ({ width, height, color, ...rest }: SvgProps) => (
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
      <Path d="M12 4c-5.718 0-6.707 6.92-6.749 11.096a1.012 1.012 0 0 1-.152.526l-1.15 1.85A1 1 0 0 0 4.8 19H19.2a1 1 0 0 0 .85-1.528l-1.15-1.85a1.012 1.012 0 0 1-.152-.526C18.707 10.919 17.719 4 12 4Z" />
      <Path d="M15 19a3 3 0 1 1-6 0M14 4c0-1.657-.5-2.5-2-2.5s-2 .843-2 2.5" />
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
export default NotificationIcon;
