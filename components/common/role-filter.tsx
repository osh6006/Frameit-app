import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from './custom-text';
import { COLOR_PALETTE } from '@/constants/theme';
import { getFontStyle } from '@/lib/util';

interface Props {
  filterArr: { name: string; filterName: string; isActive: boolean }[];
  onFilterChange: (filterName: string) => void;
}

const RoleFilter = ({ filterArr, onFilterChange }: Props) => {
  return (
    <View style={styles.container}>
      {filterArr.map((info) => (
        <TouchableOpacity
          key={info.filterName + info.name}
          onPress={() => onFilterChange(info.filterName)}
        >
          <CustomText
            style={[
              styles.text,
              {
                color: info.isActive
                  ? COLOR_PALETTE.primary
                  : COLOR_PALETTE.gray60,
              },
            ]}
          >
            {info.name}
          </CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RoleFilter;

const fontTitle16 = getFontStyle('title16');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 16,
    paddingVertical: 13,
    paddingHorizontal: 16,
  },

  text: {
    fontFamily: fontTitle16.fontFamily,
    fontSize: fontTitle16.fontSize,
    lineHeight: fontTitle16.lineHeight,
  },
});
