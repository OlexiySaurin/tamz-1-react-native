import { Stack } from "expo-router";

export default function TasksLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tasks" }} />

      <Stack.Screen name="birthday" options={{ title: "Birthday" }} />
      <Stack.Screen name="terminy" options={{ title: "Terminy" }} />

      <Stack.Screen name="localstorage" options={{ title: "Local Storage" }} />
      <Stack.Screen name="bmi" options={{ title: "BMI Calculator" }} />
    </Stack>
  );
}
