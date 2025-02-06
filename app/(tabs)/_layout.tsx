import { Stack } from 'expo-router';

import { StyleSheet, Text, View } from 'react-native';

import BottomNavigation from '@/components/common/bottom-nav';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
          headerLeft: () => (
            <View>
              <Text>키키키</Text>
            </View>
          ),
          title: '',
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
