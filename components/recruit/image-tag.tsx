import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from '../common/custom-text';

interface Props {
  name: string;
  theme: 'light' | 'dark';
}

const RecruitImageTag = ({ name, theme }: Props) => {
  const isLight = theme === 'light';

  return (
    <View>
      <CustomText>RecruitImageTag</CustomText>
    </View>
  );
};

export default RecruitImageTag;

const styles = StyleSheet.create({});
