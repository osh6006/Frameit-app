import RoleFilter from '@/components/common/role-filter';
import FeedItem from '@/components/feed/item';
import { generateFeeds } from '@/lib/faker';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function FeedScreen() {
  const fakerData = generateFeeds(10);

  const [selectedFilter, setSelectedFilter] = useState('전체');

  const filterArr = [
    { name: '전체', filterName: '전체', isActive: selectedFilter === '전체' },
    {
      name: '모델',
      filterName: '모델',
      isActive: selectedFilter === '모델',
    },
    {
      name: '작가',
      filterName: '작가',
      isActive: selectedFilter === '작가',
    },
  ];

  return (
    <View style={styles.container}>
      <RoleFilter
        filterArr={filterArr}
        onFilterChange={setSelectedFilter}
      />
      <FlatList
        style={styles.flat}
        data={fakerData}
        keyExtractor={(item) => item.id}
        renderItem={(info) => <FeedItem {...info.item} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 6,
    paddingHorizontal: 6,
  },
  flat: {
    paddingHorizontal: 10,
  },
});
