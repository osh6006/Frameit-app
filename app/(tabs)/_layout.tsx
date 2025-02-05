import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      /* 다양한 아이콘 설정 가능*/
      <Tabs.Screen
        name="index"
        options={{
          title: "모집",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen name="feed" options={{ title: "Feed" }} />
      <Tabs.Screen name="letter" options={{ title: "Letter" }} />
      <Tabs.Screen name="my" options={{ title: "MyPage" }} />
    </Tabs>
  );
}
