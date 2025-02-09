import { Text, TextProps } from 'react-native';

const CustomText = ({ style, ...props }: TextProps) => {
  return (
    <Text
      style={[{ fontFamily: 'regular' }, style]}
      {...props}
    />
  );
};

export default CustomText;
