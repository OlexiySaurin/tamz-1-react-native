import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTitleStyle: {
          fontWeight: "600",
        },

        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e7eb",
          height: 60,
          paddingBottom: 6,
        },

        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "#6b7280",

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "index") iconName = "home";
          if (route.name === "tasks") iconName = "checkbox";
          if (route.name === "about") iconName = "information-circle";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "My Application",
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
    </Tabs>
  );
}
