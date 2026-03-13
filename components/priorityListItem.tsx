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
    item.priority == "low"
      ? "checkmark-circle"
      : item.priority == "medium"
        ? "warning"
        : "alert-circle";
  const iconColor =
    item.priority == "low"
      ? "green"
      : item.priority == "medium"
        ? "yellow"
        : "red";
  return (
    <View>
      <Text>
        <Ionicons name={iconName} size={24} color={iconColor} />
      </Text>
      <View>
        <Text>{item.text}</Text>
        <Text>Priority: {item.priority}</Text>
      </View>
      {/* icons needs to be on the left, the size of both 1 and 2 text, they are on the right */}
      <Button
        title="Delete"
        onPress={() => deleteItem(item.text, item.priority)}
      />
      {/* needs to be slided left for button appearing and deleting*/}
    </View>
  );
}

const styles = StyleSheet.create({});
