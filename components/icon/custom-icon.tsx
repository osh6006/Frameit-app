import React from 'react';
import { SvgProps } from 'react-native-svg';

import IconSet from '.';

interface CustomIconProps extends SvgProps {
  name: keyof typeof IconSet;
}

export default function CustomIcon({
  name,
  width = 24,
  height = 24,
  color = 'black',
  ...rest
}: CustomIconProps) {
  const IconComponent = IconSet[name];
  return IconComponent ? (
    <IconComponent
      width={width}
      height={height}
      color={color}
      {...rest}
    />
  ) : null;
}
