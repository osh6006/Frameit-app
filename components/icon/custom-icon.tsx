import React from 'react';

import IconSet from './icon-set';

interface CustomIconProps {
  name: keyof typeof IconSet;
  size?: number;
  color?: string;
}

export default function CustomIcon({
  name,
  size = 24,
  color = 'black',
}: CustomIconProps) {
  const IconComponent = IconSet[name];
  return IconComponent ? (
    <IconComponent
      size={size}
      color={color}
    />
  ) : null;
}
