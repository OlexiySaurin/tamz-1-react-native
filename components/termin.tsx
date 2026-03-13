import { calculateDaysDifference } from "@/utils/dateCalculations";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";

type TermListItemType = {
  title: string;
  date: Date | string;
};

type Props = {
  item: TermListItemType;
};

export default function TermListItem({ item }: Props) {
  const today = new Date();
  const timeDifferenceDays = calculateDaysDifference(today, item.date);

  if (timeDifferenceDays >= 0 && timeDifferenceDays <= 7) {
    Toast.show({
      type: "error",
      text1: `Termin pro "${item.title}" je už za ${timeDifferenceDays} dny!`,
    });
  }

  const itemStyle =
    timeDifferenceDays < 0
      ? styles.greyTerm
      : timeDifferenceDays < 7
        ? styles.redTerm
        : timeDifferenceDays < 30
          ? styles.orangeTerm
          : styles.greenTerm;

  return (
    <View style={[styles.card, itemStyle]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.days}>Počet dnů: {timeDifferenceDays}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },

  days: {
    fontSize: 14,
    fontWeight: "500",
  },

  redTerm: {
    borderLeftWidth: 6,
    borderLeftColor: "#ef4444",
  },

  orangeTerm: {
    borderLeftWidth: 6,
    borderLeftColor: "#f59e0b",
  },

  greenTerm: {
    borderLeftWidth: 6,
    borderLeftColor: "#22c55e",
  },

  greyTerm: {
    borderLeftWidth: 6,
    borderLeftColor: "#9ca3af",
    opacity: 0.7,
  },
});
