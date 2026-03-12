import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

export default function BirthdayCalc() {
  const currentDate = new Date();

  const birthdayFrom = new Date();
  const birthdayTo = new Date();
  birthdayTo.setFullYear(currentDate.getFullYear() + 1);
  birthdayTo.setDate(currentDate.getDate() - 1);

  const [pickedDate, setPickedDate] = useState<Date | undefined>(() => {
    let birthdayNumber: string | null = null;
    if (Platform.OS === "web") {
      birthdayNumber = localStorage.getItem("birthday");
    }
    return birthdayNumber ? new Date(Number(birthdayNumber)) : undefined;
  });

  const [open, setOpen] = useState(false);

  const setBirthdayDate = (value: Date) => {
    setPickedDate(value);

    if (Platform.OS === "web") {
      localStorage.setItem("birthday", String(value.valueOf()));
    }

    setOpen(false);
  };

  const daysLeft =
    pickedDate != null
      ? Math.ceil((pickedDate.getTime() - currentDate.getTime()) / 86400000)
      : null;

  return (
    <View style={styles.container}>
      {/* Today card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today</Text>
        <Text style={styles.dateText}>
          {currentDate.toLocaleDateString("en-GB")}
        </Text>
      </View>

      {/* Birthday picker */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pick your Birthday</Text>

        {Platform.OS === "android" ? (
          <View style={styles.pickerArea}>
            {open && (
              <DateTimePicker
                mode="date"
                minimumDate={birthdayFrom}
                maximumDate={birthdayTo}
                value={pickedDate ?? currentDate}
                onChange={(e, value) => setBirthdayDate(value ?? currentDate)}
              />
            )}

            <Button
              title={(pickedDate ?? currentDate).toLocaleDateString("en-GB")}
              onPress={() => setOpen(true)}
            />
          </View>
        ) : (
          <DateTimePicker
            mode="date"
            minimumDate={birthdayFrom}
            maximumDate={birthdayTo}
            value={pickedDate ?? currentDate}
            onChange={(e, value) => setBirthdayDate(value ?? currentDate)}
          />
        )}

        <Text style={styles.infoText}>
          Selected date:{" "}
          {pickedDate?.toLocaleDateString("en-GB") ?? "--/--/----"}
        </Text>
      </View>

      {/* Countdown */}
      {pickedDate && (
        <View style={styles.card}>
          {daysLeft && daysLeft > 0 ? (
            <Text style={styles.countdown}>
              🎂 {daysLeft} day{daysLeft !== 1 && "s"} left until your birthday
            </Text>
          ) : (
            <Text style={styles.birthday}>🥳 Happy Birthday! 🥳</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
    backgroundColor: "#f3f4f6",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,

    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  dateText: {
    fontSize: 20,
    fontWeight: "500",
  },

  pickerArea: {
    marginBottom: 12,
  },

  infoText: {
    marginTop: 12,
    fontSize: 14,
    color: "#6b7280",
  },

  countdown: {
    fontSize: 18,
    fontWeight: "600",
  },

  birthday: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
