import React, { useState } from "react";
import { Button, Platform, StyleSheet, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  dateFrom: Date;
};

export default function DatePicker({
  selectedDate,
  setSelectedDate,
  dateFrom,
}: Props) {
  const [open, setOpen] = useState(false);

  const setDate = (date: Date) => {
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
              minimumDate={dateFrom}
              onChange={(e, value) => setDate(value!)}
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
          minimumDate={dateFrom}
          onChange={(e, value) => setDate(value!)}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
