import { Stack } from 'expo-router';

import { StyleSheet, Text, View } from 'react-native';

import BottomNavigation from '@/components/common/bottom-nav';
import Header from '@/components/common/header';
import Logo from '@/components/common/logo';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
          headerLeft: () => (
            <View>
              <Logo />
            </View>
          ),
          headerRight(props) {
            const isLogin = true;
            return isLogin ? (
              <View>
                <Text>로그인</Text>
              </View>
            ) : (
              <View>
                <Text>비 로그인</Text>
              </View>
            );
          },
          title: '',
          header(props) {
            return <Header />;
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{}}
        />
        <Stack.Screen
          name="feed"
          options={{}}
        />
        <Stack.Screen
          name="letter"
          options={{}}
        />
        <Stack.Screen
          name="my"
          options={{}}
        />
      </Stack>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  btnContainer: {},
});
