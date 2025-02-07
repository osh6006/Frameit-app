import { Href, Tabs, useRouter } from 'expo-router';

import { useState } from 'react';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLOR_PALETTE } from '@/constants/color';

export default function BottomNavigation() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <NavItem
        name="모집"
        path={'/(tabs)'}
      />
      <NavItem
        name="피드"
        path={'/(tabs)/feed'}
      />
      <TouchableOpacity style={styles.item}>
        <Text>메뉴</Text>
      </TouchableOpacity>
      <NavItem
        name="쪽지"
        path={'/(tabs)/letter'}
      />
      <NavItem
        name="마이"
        path={'/(tabs)/my'}
      />
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
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={handlePress}
    >
      {icon}
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

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
  },
  btnText: {
    color: 'red',
  },
});
