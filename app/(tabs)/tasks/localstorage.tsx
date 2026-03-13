import ListItem from "@/components/listItem";
import { storage } from "@/utils/storage";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LocalStorageTask() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState<string[]>(() => {
    return JSON.parse(storage.getString("list") ?? "[]");
  });

  const saveListTolocalStorage = (lst: string[]) => {
    storage.set("list", JSON.stringify(lst));
  };

  const addItem = (item: string) => {
    if (!item.trim()) return;

    setList([...list, item]);
    setNewItem("");
    saveListTolocalStorage([...list, item]);
  };

  const deleteItem = (index: number) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
    saveListTolocalStorage([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task name..."
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />

        <View style={styles.buttonSpacing}>
          <Button
            title="Add new element to the list"
            onPress={() => addItem(newItem)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button title="Clear list" color="red" onPress={() => setList([])} />
        </View>
      </View>

      <Text style={styles.counter}>Number of items: {list.length}</Text>
      <View style={styles.listContainer}>
        {list.map((item, index) => (
          <ListItem
            index={index}
            key={index}
            title={item}
            deleteItem={deleteItem}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f8",
  },

  inputContainer: {
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
    fontSize: 16,
  },

  buttonSpacing: {
    marginVertical: 5,
  },

  counter: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  listContainer: {
    marginTop: 10,
  },
});
