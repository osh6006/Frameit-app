import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, useImage } from 'expo-image';
import { IMAGE_BLUR } from '@/constants/theme';
import { FakeFeed } from '@/lib/faker';

const FeedItem = ({ image: src }: FakeFeed) => {
  const image = useImage(src, {
    maxWidth: 500,
    maxHeight: 458,
    onError(error) {
      console.error('Loading failed:', error.message);
    },
  });

  const imageHeight = image ? image.height / image.scale : 458;

  return (
    <View
      style={{
        width: '100%',
        height: imageHeight,
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <Image
        style={styles.image}
        source={image}
        contentFit="cover"
        cachePolicy="memory"
        placeholder={{ blurhash: IMAGE_BLUR }}
      />
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
