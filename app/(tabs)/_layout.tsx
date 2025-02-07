import { Stack } from 'expo-router';

import { StyleSheet, Text, View } from 'react-native';

import BottomNavigation from '@/components/common/bottom-nav';
import Header from '@/components/common/header';
import Logo from '@/components/common/logo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView style={styles.container}>
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
          header() {
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  btnContainer: {},
});
