import { FONT_SYSTEM } from '@/constants/theme';

type FontKeys = keyof typeof FONT_SYSTEM;
type FontStyle = {
  fontSize: number;
  fontFamily: FontFamily;
  lineHeight: number;
};

type FontFamily =
  | 'thin' // 100
  | 'extraLight' //200
  | 'light' // 300
  | 'regular' // 400
  | 'medium' // 500
  | 'semiBold' // 600
  | 'bold' // 700
  | 'extraBold'; // 800

const fontFamily: Record<number, FontFamily> = {
  100: 'thin',
  200: 'extraLight',
  300: 'light',
  400: 'regular',
  500: 'medium',
  600: 'semiBold',
  700: 'bold',
  800: 'extraBold',
};

export const getFontStyle = (key: FontKeys): FontStyle => {
  return {
    fontSize: FONT_SYSTEM[key].fontSize,
    fontFamily: fontFamily[FONT_SYSTEM[key].fontWeight],
    lineHeight: FONT_SYSTEM[key].lineHeight,
  };
};
