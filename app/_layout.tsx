import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Pretendard: require('@/assets/fonts/PretendardVariable.ttf'),
    test: require('@/assets/fonts/test.ttf'),
    thin: require('@/assets/fonts/Pretendard-Thin.otf'),
    light: require('@/assets/fonts/Pretendard-Light.otf'),
    extraLight: require('@/assets/fonts/Pretendard-ExtraLight.otf'),
    regular: require('@/assets/fonts/Pretendard-Regular.otf'),
    medium: require('@/assets/fonts/Pretendard-Medium.otf'),
    semiBold: require('@/assets/fonts/Pretendard-SemiBold.otf'),
    bold: require('@/assets/fonts/Pretendard-Bold.otf'),
    extraBold: require('@/assets/fonts/Pretendard-ExtraBold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}
