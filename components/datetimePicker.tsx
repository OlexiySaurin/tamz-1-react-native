import React, { useState } from "react";
import { Button, Platform, StyleSheet, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export default function DatePicker({ selectedDate, setSelectedDate }: Props) {
  const [open, setOpen] = useState(false);

  const setDate = (date: Date | undefined) => {
    setSelectedDate(date);
    setOpen(false);
  };

  return (
    <>
      {Platform.OS === "android" ? (
        <View>
          {open && (
            <DateTimePicker
              mode="date"
              value={selectedDate}
              onChange={(e, value) => setDate(value)}
            />
          )}
          <Button
            title={selectedDate.toLocaleDateString()}
            onPress={() => setOpen(true)}
          />
        </View>
      ) : (
        <DateTimePicker
          mode="date"
          value={selectedDate}
          onChange={(e, value) => setDate(value)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
