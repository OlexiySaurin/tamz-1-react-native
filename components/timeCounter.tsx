import { calculateTimeDifference } from "@/utils/dateCalculations";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TimeSemesterLeftLiveCounter({
  endSemesterDay,
}: {
  endSemesterDay: Date;
}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    if (endSemesterDay < currentTime) return;

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = calculateTimeDifference(
    currentTime,
    endSemesterDay,
  );

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Konec semestru za</Text>

      <Text style={styles.countdown}>
        {days}d {hours}h {minutes}m {seconds}s
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  countdown: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 6,
    fontFamily: "monospace",
  },
});
