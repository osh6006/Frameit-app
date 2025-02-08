import { Href, Link, useRouter, useSegments } from 'expo-router';

import { useState } from 'react';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLOR_PALETTE, FONT_SYSTEM } from '@/constants/theme';

import CustomIcon from '../icon/custom-icon';
import { getFontStyle } from '@/lib/util';
import CustomText from './custom-text';
import OptionModal from './option-modal';

export default function BottomNavigation() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onModalOpen = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <NavItem
        name="모집"
        path={'/(tabs)'}
        icon={<CustomIcon name="search" />}
      />
      <NavItem
        name="피드"
        path={'/(tabs)/feed'}
        icon={<CustomIcon name="feed" />}
      />
      <TouchableOpacity
        style={styles.item}
        onPress={onModalOpen}
      >
        <CustomIcon
          name="plusCircle"
          width={32}
          height={32}
        />
      </TouchableOpacity>
      <NavItem
        name="쪽지"
        path={'/(tabs)/letter'}
        icon={<CustomIcon name="message" />}
      />
      <NavItem
        name="마이"
        path={'/(tabs)/my'}
        icon={<CustomIcon name="my" />}
      />
      <OptionModal
        isVisible={isModalVisible}
        onClose={onModalClose}
      >
        <View
          style={{
            rowGap: 6,
          }}
        >
          <Link
            href="/(tabs)/feed"
            onPress={onModalClose}
          >
            <View style={styles.optionContainer}>
              <CustomIcon name="search" />
              <CustomText style={styles.optionText}>모집글 업로드</CustomText>
            </View>
          </Link>
          <Link
            href="/(tabs)/feed"
            onPress={onModalClose}
          >
            <View style={styles.optionContainer}>
              <CustomIcon name="feed" />
              <CustomText style={styles.optionText}>
                포트폴리오 업로드
              </CustomText>
            </View>
          </Link>
        </View>
      </OptionModal>
    </View>
  );
}

const NavItem = ({
  name,
  path,
  icon = null,
}: {
  name: string;
  path: Href;
  icon?: React.ReactNode;
}) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(path);
  };
  const segments = useSegments();
  const isActive = path.toString().split('/').at(-1) === segments.at(-1);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={handlePress}
    >
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          color: isActive ? COLOR_PALETTE.gray10 : COLOR_PALETTE.gray60,
        })}

      <CustomText
        style={{
          ...styles.itemText,
          color: isActive ? COLOR_PALETTE.gray10 : COLOR_PALETTE.gray60,
        }}
      >
        {name}
      </CustomText>
    </TouchableOpacity>
  );
};

const fontTiny = getFontStyle('tiny10');
const fontTitle16 = getFontStyle('title16');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    height: 60,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: COLOR_PALETTE.gray80,
  },

  item: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
    rowGap: 4,
  },

  itemText: {
    fontSize: fontTiny.fontSize,
    fontWeight: fontTiny.fontWeight,
    lineHeight: fontTiny.lineHeight,
  },

  optionContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 9,
  },

  optionText: {
    fontSize: fontTitle16.fontSize,
    lineHeight: fontTitle16.lineHeight,
    fontWeight: fontTitle16.fontWeight,
    marginLeft: 13,
  },
});
