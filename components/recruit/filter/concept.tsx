import { StyleSheet, View } from 'react-native';
import React from 'react';
import ConceptTag from '@/components/common/concept-tag';
import Button from '@/components/common/button';

type Props = {};

const FilterConcept = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tagContainer}>
        <ConceptTag>모노톤</ConceptTag>
        <ConceptTag>신비로운</ConceptTag>
        <ConceptTag>레트로</ConceptTag>
        <ConceptTag theme="dark">스냅샷</ConceptTag>
      </View>
      <Button
        disabled
        title="필터 적용하기"
      />
    </View>
  );
};

export default FilterConcept;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  tagContainer: {
    flexDirection: 'row',
    columnGap: 8,
  },
});
