import PriorityListItem, {
  Priority,
  PriorityItem,
} from "@/components/priorityListItem";
import { storage } from "@/utils/storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

type PriorityListType = {
  high: PriorityItem[];
  medium: PriorityItem[];
  low: PriorityItem[];
};

export default function PriorityList() {
  const [itemText, setItemText] = useState("");
  const [itemPriority, setItemPriority] = useState<Priority>("low");

  const [list, setList] = useState<PriorityListType>(() => {
    const lst = storage.getString("priorityList");

    return lst
      ? JSON.parse(lst)
      : {
          high: [],
          medium: [],
          low: [],
        };
  });

  const flatList = [...list.high, ...list.medium, ...list.low];

  const saveListTolocalStorage = (lst: PriorityListType) => {
    storage.set("priorityList", JSON.stringify(lst));
  };

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          <Text style={styles.counterText}>{flatList.length}</Text>
          <Button title="Clear" onPress={clearList} />
        </View>
      ),
    });
  }, [navigation, flatList]);

  const addItem = (text: string, priority: Priority) => {
    if (!text.trim()) return;

    const newList = {
      ...list,
      [priority]: [...list[priority], { text, priority }],
    };

    setList(newList);
    saveListTolocalStorage(newList);
    setItemText("");
  };

  const deleteItem = (text: string, priority: Priority) => {
    const newList = {
      ...list,
      [priority]: list[priority].filter((item) => item.text !== text),
    };

    setList(newList);
    saveListTolocalStorage(newList);
  };

  const clearList = () => {
    const empty = { high: [], medium: [], low: [] };

    setList(empty);
    saveListTolocalStorage(empty);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={flatList}
        renderItem={({ item }) => (
          <PriorityListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.text}
      />

      <View style={styles.inputSection}>
        <Text style={styles.label}>Item</Text>

        <TextInput
          style={styles.input}
          placeholder="Item Name"
          onChangeText={(text) => setItemText(text)}
          value={itemText}
        />

        <RNPickerSelect
          placeholder="Select priority"
          items={[
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ]}
          value={itemPriority}
          onValueChange={(priority) => setItemPriority(priority as Priority)}
        />

        <View style={styles.addButton}>
          <Button
            title="Add Item"
            onPress={() => addItem(itemText, itemPriority)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },

  list: {
    marginBottom: 20,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  counterText: {
    fontSize: 16,
    fontWeight: "600",
  },

  inputSection: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  addButton: {
    marginTop: 10,
  },
});
