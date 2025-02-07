import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SettingIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <Path
      stroke={color}
      strokeWidth={2}
      d="M9.785 3v2.337a1 1 0 0 1-.51.871l-1.083.61a1 1 0 0 1-.98 0L5.067 5.61a1 1 0 0 0-1.35.362L2.521 7.988a1 1 0 0 0 .37 1.382l2.085 1.172a1 1 0 0 1 .51.872v1.172a1 1 0 0 1-.51.872l-2.085 1.173a1 1 0 0 0-.37 1.381l1.194 2.015a1 1 0 0 0 1.35.362l2.146-1.206a1 1 0 0 1 .98 0l1.083.609a1 1 0 0 1 .51.871V21a1 1 0 0 0 1 1h2.43a1 1 0 0 0 1-1v-2.337a1 1 0 0 1 .51-.871l1.083-.61a1 1 0 0 1 .98 0l2.145 1.207a1 1 0 0 0 1.35-.362l1.195-2.015a1 1 0 0 0-.37-1.381l-2.085-1.173a1 1 0 0 1-.51-.872v-1.172a1 1 0 0 1 .51-.872l2.085-1.172a1 1 0 0 0 .37-1.382l-1.194-2.015a1 1 0 0 0-1.35-.362l-2.146 1.206a1 1 0 0 1-.98 0l-1.083-.609a1 1 0 0 1-.51-.871V3a1 1 0 0 0-1-1h-2.43a1 1 0 0 0-1 1Z"
    />
    <Path
      stroke={color}
      strokeWidth={2}
      d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
);
export default SettingIcon;
