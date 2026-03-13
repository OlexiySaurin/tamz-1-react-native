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
import Dropdown from "react-native-input-select";

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
        <View>
          <Text>{flatList.length}</Text>
          <Button title="Remove All" onPress={() => clearList()} />
        </View>
      ),
    });
  }, [navigation, flatList]);

  const addItem = (text: string, priority: Priority) => {
    if (!text.trim()) return;
    setList({
      ...list,
      [priority]: [...list[priority], { text, priority }],
    });
    setItemText("");
    saveListTolocalStorage({
      ...list,
      [priority]: [...list[priority], { text, priority }],
    });
  };

  const deleteItem = (text: string, priority: Priority) => {
    setList({
      ...list,
      [priority]: list[priority].filter((item) => item.text !== text),
    });
    saveListTolocalStorage({
      ...list,
      [priority]: list[priority].filter((item) => item.text !== text),
    });
  };

  const clearList = () => {
    setList({
      high: [],
      medium: [],
      low: [],
    });
    saveListTolocalStorage({
      high: [],
      medium: [],
      low: [],
    });
  };
  return (
    <View>
      <View>
        <Text>1</Text>
        {/* <Button title="Remove All"/> */}
      </View>

      <FlatList
        data={flatList}
        renderItem={({ item }) => (
          <PriorityListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={(item) => item.text}
      />
      <View>
        <Text>Item: </Text>
        <TextInput
          placeholder="Item Name"
          onChangeText={(text) => setItemText(text)}
          value={itemText}
        />
        <Dropdown
          placeholder="Select priority"
          options={[
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ]}
          selectedValue={itemPriority}
          onValueChange={(priority) => setItemPriority(priority as Priority)}
        />
        <Button title="Add" onPress={() => addItem(itemText, itemPriority)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
