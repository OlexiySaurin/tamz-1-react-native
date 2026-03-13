import { storage } from "@/utils/storage";
import { Stack } from "expo-router";
import { Button } from "react-native";

export default function TasksLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tasks" }} />

      <Stack.Screen name="birthday" options={{ title: "Birthday" }} />
      <Stack.Screen name="terminy" options={{ title: "Terminy" }} />

      <Stack.Screen
        name="localstorage"
        options={{
          title: "Local Storage",
        }}
      />
      <Stack.Screen
        name="priority_list"
        options={{
          title: "Priority List",
          headerRight: () => (
            <Button
              title="Remove All"
              onPress={() => storage.set("priorityList", "[]")}
            />
          ),
        }}
      />
      <Stack.Screen name="bmi" options={{ title: "BMI Calculator" }} />
    </Stack>
  );
}
