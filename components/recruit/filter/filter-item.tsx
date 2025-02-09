import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import OptionModal from '../../common/option-modal';
import CustomIcon from '@/components/icon/custom-icon';
import { COLOR_PALETTE } from '@/constants/theme';
import CustomText from '@/components/common/custom-text';
import { getFontStyle } from '@/lib/util';
import FilterConcept from './concept';

interface Props {
  title?: string;
  theme: 'reset' | 'concept' | 'location' | 'time' | 'place';
}

type ThemeWithoutReset = Exclude<Props['theme'], 'reset'>;

const themeContent: Record<ThemeWithoutReset, React.ReactNode> = {
  concept: <FilterConcept />,
  location: <CustomText>📍 위치 선택</CustomText>,
  time: <CustomText>⏰ 시간 선택</CustomText>,
  place: <CustomText>🏢 장소 선택</CustomText>,
};

const RecruitFilterItem = ({ title, theme }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onModalOpen = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  if (theme === 'reset') {
    return (
      <TouchableOpacity>
        <View style={[styles.reset]}>
          <CustomIcon
            name="reload"
            width={18}
            height={18}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <TouchableOpacity onPress={onModalOpen}>
        <View style={styles.container}>
          <CustomText style={styles.title}>{title}</CustomText>
          <View>
            <CustomIcon
              name="cDown"
              width={18}
              height={18}
            />
          </View>
        </View>
      </TouchableOpacity>

      <OptionModal
        isVisible={isModalVisible}
        onClose={onModalClose}
        title={title}
        height={'70%'}
      >
        {themeContent[theme]}
      </OptionModal>
    </>
  );
};

export default RecruitFilterItem;

const button14 = getFontStyle('button14');
const styles = StyleSheet.create({
  reset: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLOR_PALETTE.gray20,
    columnGap: 2,
    padding: 6,
    aspectRatio: '1/1',
  },

  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: COLOR_PALETTE.gray20,
    columnGap: 2,
  },

  title: {
    fontFamily: button14.fontFamily,
    fontSize: button14.fontSize,
    lineHeight: button14.lineHeight,
  },
});
