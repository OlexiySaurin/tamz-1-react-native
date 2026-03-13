import TaskItem from "@/components/task";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function Tasks() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TaskItem
        title="🎂 How many days left until birthday?"
        onPress={() => router.push("/tasks/birthday")}
      />
      <TaskItem
        title="🗓️ Terminy"
        description="Důležité terminy v letnim semestru"
        onPress={() => router.push("/tasks/terminy")}
      />

      <TaskItem
        title="💾 Local Storage: Simple List"
        description="SA list that saves the data locally."
        onPress={() => router.push("/tasks/localstorage")}
      />

      <TaskItem
        title="📊 Local Storage: Priority List"
        description="A priority list that saves the data locally."
        onPress={() => router.push("/tasks/priority_list")}
      />

      <TaskItem
        title="BMI Calculator"
        description="Calculate Body Mass Index"
        onPress={() => router.push("/tasks/bmi")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
