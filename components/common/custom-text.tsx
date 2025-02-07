import { useFonts } from 'expo-font';
import { Text, TextProps } from 'react-native';

const CustomText = ({ style, ...props }: TextProps) => {
  const [isFontLoaded] = useFonts({
    Pretendard: require('@/assets/fonts/PretendardVariable.ttf'),
    test: require('@/assets/fonts/test.ttf'),
  });

  return (
    <Text
      style={[{ fontFamily: 'Pretendard' }, style]}
      {...props}
    />
  );
};

export default CustomText;
