import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RecruitFilterItem from './filter-item';

const RecruitFilter = () => {
  return (
    <View style={styles.container}>
      <RecruitFilterItem theme="reset" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollContainer}
      >
        <RecruitFilterItem
          title="촬영컨셉"
          theme="concept"
        />
        <RecruitFilterItem
          title="지역"
          theme="location"
        />
        <RecruitFilterItem
          title="촬영일시"
          theme="time"
        />
        <RecruitFilterItem
          title="촬영장소"
          theme="place"
        />
      </ScrollView>
    </View>
  );
};

export default RecruitFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    columnGap: 8,
  },
  scrollContainer: {
    flexGrow: 0,
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
