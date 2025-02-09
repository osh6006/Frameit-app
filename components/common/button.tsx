import { COLOR_PALETTE } from '@/constants/theme';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
  View,
} from 'react-native';

interface ButtonProps {
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'secondary' | 'outline' | 'disabled';
  onPress?: (event: GestureResponderEvent) => void;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'md',
  theme = 'primary',
  onPress,
  icon,
  style,
  textStyle,
  disabled = false,
}) => {
  const isIconButton = !!icon && !title;

  const iconSizes = {
    md: 'iconMD',
    lg: 'iconLG',
  } as const;

  const getStyle = () => {
    const baseStyle = [styles.buttonBase, styles[theme], styles[size], style];

    if (isIconButton) {
      baseStyle.push(styles.iconButton);

      const iconSizeKey = size as Exclude<typeof size, 'sm'>;
      if (iconSizeKey in iconSizes) {
        baseStyle.push(styles[iconSizes[iconSizeKey]]);
      }
    }

    if (disabled) baseStyle.push(styles.disabled);
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getStyle()}
      onPress={!disabled ? onPress : undefined}
      activeOpacity={disabled ? 1 : 0.7}
    >
      {icon && <View>{icon}</View>}
      {!isIconButton && title && (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
  },

  sm: { paddingVertical: 6 },
  md: { paddingVertical: 10 },
  lg: { paddingVertical: 14 },

  iconButton: { paddingHorizontal: 0, borderRadius: 50 },
  iconMD: { width: 40, height: 40 },
  iconLG: { width: 56, height: 56 },

  primary: { backgroundColor: COLOR_PALETTE.primary },
  secondary: { backgroundColor: COLOR_PALETTE.gray20 },
  outline: {
    borderWidth: 1,
    borderColor: COLOR_PALETTE.gray40,
    backgroundColor: 'transparent',
  },
  disabled: { backgroundColor: COLOR_PALETTE.gray70, opacity: 0.5 },

  text: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },
});
