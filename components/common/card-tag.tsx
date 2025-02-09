import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';
import CustomText from './custom-text';
import { getFontStyle } from '@/lib/util';
import { COLOR_PALETTE } from '@/constants/theme';

interface Props {
  name: string;
  theme: 'light' | 'dark';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CardTag = ({ name, theme, style, textStyle }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: theme === 'light' ? 1 : 0,
          borderColor: theme === 'light' ? COLOR_PALETTE.gray60 : '',
          backgroundColor:
            theme === 'light' ? COLOR_PALETTE.gray100 : COLOR_PALETTE.gray20,
        },
        style,
      ]}
    >
      <CustomText
        style={[
          styles.text,
          {
            color:
              theme === 'light' ? COLOR_PALETTE.gray60 : COLOR_PALETTE.gray100,
          },
          textStyle,
        ]}
      >
        {name}
      </CustomText>
    </View>
  );
};

export default CardTag;

const fontTag12 = getFontStyle('tag12');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 40,
  },
  text: {
    fontSize: fontTag12.fontSize,
    fontFamily: fontTag12.fontFamily,
  },
});
