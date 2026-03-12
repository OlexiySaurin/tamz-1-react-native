import { calculateTimeDifference } from "@/utils/dateCalculations";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type TermListItemType = {
  title: string;
  date: Date;
};

type Props = {
  item: TermListItemType;
};

export default function TermListItem({ item }: Props) {
  const today = new Date();
  const timeDifferenceDays = calculateTimeDifference(today, item.date).days;

  const itemStyle =
    timeDifferenceDays < 0
      ? styles.greyTerm
      : timeDifferenceDays < 7
        ? styles.redTerm
        : timeDifferenceDays < 30
          ? styles.orangeTerm
          : styles.greenTerm;

  return (
    <View style={[itemStyle]}>
      <Text>{item.title}</Text>
      <Text>Počet dnů: {timeDifferenceDays}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  redTerm: {
    color: "red",
  },
  orangeTerm: {
    color: "orange",
  },
  greenTerm: {
    color: "green",
  },
  greyTerm: {
    color: "grey",
  },
});
