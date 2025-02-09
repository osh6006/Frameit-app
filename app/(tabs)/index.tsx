import RoleFilter from '@/components/common/role-filter';
import RecruitFilter from '@/components/recruit/filter/filter';
import RecruitItem from '@/components/recruit/item';
import { generateRecruits } from '@/lib/faker';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function RecruitScreen() {
  const fakerData = generateRecruits();
  const [selectedFilter, setSelectedFilter] = useState('전체');

  const filterArr = [
    { name: '전체', filterName: '전체', isActive: selectedFilter === '전체' },
    {
      name: '모델구인',
      filterName: '모델',
      isActive: selectedFilter === '모델',
    },
    {
      name: '작가구인',
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
      <RecruitFilter />
      <FlatList
        style={styles.flat}
        data={fakerData}
        keyExtractor={(item) => item.id}
        renderItem={(info) => <RecruitItem {...info.item} />}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingBottom: 6,
  },
  flat: {
    marginTop: 16,
    paddingHorizontal: 10,
  },
});
