import { FONT_SYSTEM } from '@/constants/theme';

type FontKeys = keyof typeof FONT_SYSTEM;
type FontStyle = {
  fontSize: number;
  fontWeight: FontWeight;
  lineHeight: number;
};

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'ultralight'
  | 'thin'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'condensedBold'
  | 'condensed'
  | 'heavy'
  | 'black';

export const getFontStyle = (key: FontKeys): FontStyle => {
  return {
    fontSize: FONT_SYSTEM[key].fontSize,
    fontWeight: FONT_SYSTEM[key].fontWeight as FontWeight,
    lineHeight: FONT_SYSTEM[key].lineHeight,
  };
};
