import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const EditIcon = ({ width, height, color, ...rest }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <Path
      stroke={color}
      strokeWidth={2}
      d="m6.639 16.04 9.24-11.068c.449-.537 1.01-.807 1.253-.604l2.647 2.21c.243.203.077.804-.371 1.34l-9.24 11.067c-.308.369-.683.627-.97.666l-3.277.834a.2.2 0 0 1-.247-.224l.468-3.053c.01-.064.012-.128.018-.192.026-.281.204-.648.479-.977Z"
    />
    <Path
      stroke={color}
      d="m9.716 19.021-3.07-2.563-.685 2.38 2.127 1.353 1.628-1.17Z"
    />
  </Svg>
);
export default EditIcon;
