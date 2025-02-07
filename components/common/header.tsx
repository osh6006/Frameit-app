import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLOR_PALETTE } from '@/constants/color';

import Logo from './logo';

type Props = {};

const Header = (props: Props) => {
  const isLogin = true;

  return (
    <View style={styles.container}>
      <Logo />
      {isLogin ? (
        <View>
          <Text>로그인</Text>
        </View>
      ) : (
        <View>
          <Text>비 로그인</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    position: 'absolute',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderBottomWidth: 1,
    borderColor: COLOR_PALETTE.gray80,
  },
});
