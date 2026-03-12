import DatePicker from "@/components/datetimePicker";
import TermListItem from "@/components/termin";
import TimeSemesterLeftLiveCounter from "@/components/timeCounter";
import termins from "@/data/termins.json";
import { calculateDaysDifference } from "@/utils/dateCalculations";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function Terms() {
  const today = new Date();

  const startSemesterDay = new Date("2026-02-16");
  const endSemesterDay = new Date("2026-05-16");

  const days = calculateDaysDifference(today, endSemesterDay);

  const totalSemesterDays = calculateDaysDifference(
    startSemesterDay,
    endSemesterDay,
  );

  const daysPassed = Math.min(totalSemesterDays - days - 1, totalSemesterDays);
  const percentagePassed = daysPassed / totalSemesterDays;
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());

  const daysToSelectedDay = calculateDaysDifference(today, selectedDate);

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.dateText}>
          Dnešní datum: {today.toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Průběh semestru</Text>

        <ProgressBar
          progress={percentagePassed}
          color="#3b82f6"
          style={styles.progressBar}
        />

        <Text style={styles.progressText}>
          {Math.floor(percentagePassed * 100)} % ({daysPassed} /{" "}
          {totalSemesterDays} dnů)
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Důležité termíny</Text>

        <FlatList
          data={termins}
          renderItem={({ item }) => <TermListItem item={item} />}
          keyExtractor={(item) => item.title}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Zadej datum</Text>

        <DatePicker
          dateFrom={today}
          selectedDate={selectedDate ?? today}
          setSelectedDate={setSelectedDate}
        />

        <Text style={styles.text}>
          Počet dnů do zvoleného data: {daysToSelectedDay}
        </Text>
      </View>

      <TimeSemesterLeftLiveCounter endSemesterDay={endSemesterDay} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },

  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 14,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  text: {
    fontSize: 15,
    color: "#444",
  },

  dateText: {
    fontSize: 16,
    fontWeight: "500",
  },

  progressBar: {
    marginVertical: 10,
    height: 10,
    borderRadius: 10,
  },

  progressText: {
    fontSize: 14,
    color: "#666",
  },
});
