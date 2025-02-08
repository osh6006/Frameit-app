import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLOR_PALETTE } from '@/constants/theme';
import Logo from './logo';

const Header = () => {
  const isLogin = true;

  return (
    <View style={styles.container}>
      <Logo />
      {isLogin ? (
        <View>
          <Text style={styles.text}>로그인</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>비 로그인</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR_PALETTE.gray100,
    borderBottomWidth: 1,
    borderColor: COLOR_PALETTE.gray80,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
