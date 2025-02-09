import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { COLOR_PALETTE } from '@/constants/theme';
import { getFontStyle } from '@/lib/util';
import CustomText from './custom-text';

interface Props {
  children: string;
  theme?: 'light' | 'dark';
  size?: 'md' | 'sm';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ConceptTag = ({
  children,
  size = 'md',
  theme = 'light',
  style,
  textStyle,
}: Props) => {
  const isDark = theme === 'dark';
  return (
    <TouchableOpacity>
      <View style={[styles.defaultContainer, styles[theme], style]}>
        <CustomText
          style={[
            styles[size],
            {
              color: isDark ? COLOR_PALETTE.gray100 : COLOR_PALETTE.gray60,
            },
            textStyle,
          ]}
        >
          {children}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default ConceptTag;

const fontTag14 = getFontStyle('tag14');
const fontTag12 = getFontStyle('tag12');

const styles = StyleSheet.create({
  defaultContainer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
  },

  light: {
    backgroundColor: COLOR_PALETTE.gray100,
    borderColor: COLOR_PALETTE.gray20,
    borderWidth: 1,
  },
  dark: {
    backgroundColor: COLOR_PALETTE.gray20,
    borderWidth: 0,
  },

  md: {
    fontSize: fontTag14.fontSize,
    fontFamily: fontTag14.fontFamily,
  },
  sm: {
    fontSize: fontTag12.fontSize,
    fontFamily: fontTag12.fontFamily,
  },
});
