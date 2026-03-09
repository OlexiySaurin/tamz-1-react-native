import { Stack } from "expo-router";

export default function TasksLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tasks" }} />

      <Stack.Screen name="datetime" options={{ title: "Datetime" }} />

      <Stack.Screen
        name="localstorage"
        options={{ title: "Local Storage" }}
      />
      <Stack.Screen
        name="bmi"
        options={{ title: "BMI Calculator" }}
      />
    </Stack>
  );
}
