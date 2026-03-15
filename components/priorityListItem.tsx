import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export type Priority = "high" | "medium" | "low";

export type PriorityItem = {
  text: string;
  priority: Priority;
};

export default function PriorityListItem({
  item,
  deleteItem,
}: {
  item: PriorityItem;
  deleteItem: (text: string, priority: Priority) => void;
}) {
  const iconName =
    item.priority === "low"
      ? "checkmark-circle"
      : item.priority === "medium"
        ? "warning"
        : "alert-circle";

  const iconColor =
    item.priority === "low"
      ? "green"
      : item.priority === "medium"
        ? "#f5b700"
        : "red";

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={26} color={iconColor} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Text style={styles.priorityText}>Priority: {item.priority}</Text>
      </View>

      <View style={styles.deleteButton}>
        <Button
          title="Delete"
          color="#ff4d4d"
          onPress={() => deleteItem(item.text, item.priority)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  iconContainer: {
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  itemText: {
    fontSize: 16,
    fontWeight: "600",
  },

  priorityText: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  deleteButton: {
    marginLeft: 10,
  },
});
