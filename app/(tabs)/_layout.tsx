import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { StyleSheet, View } from 'react-native';

import CustomIcon from '@/components/icon/custom-icon';
import { COLOR_PALETTE } from '@/constants/color';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLOR_PALETTE.gray10,
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '모집',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="feed"
        options={{
          title: '피드',
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <CustomIcon
              name="plus"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="add-menu"
        options={{
          title: '',
          tabBarButton: () => (
            <CustomIcon
              name="plus"
              color={COLOR_PALETTE.gray10}
              size={24}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // 실제 네비게이션 방지
            e.preventDefault();
          },
        }}
      /> */}

      <Tabs.Screen
        name="letter"
        options={{ title: 'Letter' }}
      />
      <Tabs.Screen
        name="my"
        options={{ title: 'MyPage' }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLOR_PALETTE.gray100,
    borderTopWidth: 1,
    borderTopColor: 'black',
    paddingHorizontal: 50,
  },
});
