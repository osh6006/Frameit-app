import { StyleSheet, View } from 'react-native';
import React from 'react';
import { FakeRecruit } from '@/lib/faker';
import { Image } from 'expo-image';
import { COLOR_PALETTE, IMAGE_BLUR } from '@/constants/theme';
import CustomText from '../common/custom-text';
import { getFontStyle } from '@/lib/util';
import CustomIcon from '../icon/custom-icon';
import CardTag from '../common/card-tag';

const RecruitItem = ({ image, title, address, time, tags }: FakeRecruit) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={image}
          contentFit="cover"
          placeholder={{ blurhash: IMAGE_BLUR }}
        />
      </View>
      <View style={styles.leftContainer}>
        <View style={styles.titleContainer}>
          <View style={{ flex: 1 }}>
            <CustomText style={styles.title}>{title}</CustomText>
          </View>
          <CustomIcon name="bookmark" />
        </View>
        <View style={{ marginTop: 5 }}>
          <View style={styles.locationContainer}>
            <CustomIcon
              name="location"
              width={18}
              height={18}
            />
            <CustomText style={styles.locationText}>{address}</CustomText>
          </View>
          <View style={styles.locationContainer}>
            <CustomIcon
              name="time"
              width={18}
              height={18}
            />
            <CustomText style={styles.locationText}>{time}</CustomText>
          </View>
        </View>
        <View style={styles.tagContainer}>
          {tags.map((tag, i) => (
            <CardTag
              name={tag}
              key={tag + i}
              theme="light"
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default RecruitItem;

const fontTitle16 = getFontStyle('title16');
const fontBody14 = getFontStyle('body14');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 12,
  },
  imageContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    borderRadius: 6,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  leftContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fontTitle16.fontFamily,
    fontSize: fontTitle16.fontSize,
    lineHeight: fontTitle16.lineHeight,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  locationText: {
    fontFamily: fontBody14.fontFamily,
    fontSize: fontBody14.fontSize,
    lineHeight: fontBody14.lineHeight,
    color: COLOR_PALETTE.gray40,
  },

  tagContainer: {
    marginTop: 5,
    flexDirection: 'row',
    columnGap: 4,
  },
});
