import TaskItem from "@/components/task";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function Tasks() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TaskItem
        title="Task 1 – 📆 Working with Date and Time"
        description="Show the current date and a birthday picker that calculates the number of days remaining until the next birthday."
        onPress={() => router.push("/tasks/datetime")}
      />

      <TaskItem
        title="Task 2 – 💾 Working with Local Storage"
        description="Simple CRUD app - a list that saves the data locally."
        onPress={() => router.push("/tasks/localstorage")}
      />

      <TaskItem
        title="Task 3 – BMI Calculator"
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
