/*
<!-- =============================================================
    TODO 1: Přidání důležitých termínů
    =============================================================
    Vytvořte novou ion-card, ve které zobrazíte 3 důležité termíny
    (např. konec semestru, zkouška, servis ...).

    Harmonogram semestru: https://www.vsb.cz/cs/student/harmonogram/
    Ověření výsledků: https://www.timeanddate.com/date/durationresult.html
-->

<!-- =============================================================
    TODO 2: Barevné rozlišení zbývajících dnů
    =============================================================
    Podle počtu zbývajících dnů změňte barvu textu termínu, například:
    - méně než 7 dnů   → červeně 
    - méně než 30 dnů  → oranžově 
    - 30 a více dnů    → zeleně 
    - v minulosti      → šedě
-->

<!-- =============================================================
    TODO 3: Progress bar průběhu semestru
    =============================================================
    Přidejte ion-card s komponentou ion-progress-bar, která
    zobrazí, kolik procent semestru již uběhlo.

    Dokumentace: https://ionicframework.com/docs/api/progress-bar
-->

<!-- =============================================================
    TODO 4: Toast upozornění na blízké termíny
    =============================================================
    Při načtení stránky zkontrolujte, zda je některý termín
    za 7 nebo méně dnů. Pokud ano, zobrazte ion-toast
    s upozorněním.

    Dokumentace: https://ionicframework.com/docs/api/toast
-->

<!-- =============================================================
    BONUS: Živý odpočet v reálném čase
    =============================================================
    Přidejte kartu, která zobrazuje odpočet do konce semestru například
    ve formátu: "93d 14h 23m 45s" a aktualizuje se každou sekundu.

    HINT: Použijte setInterval
-->
*/
import DatePicker from "@/components/datetimePicker";
import TermListItem from "@/components/termin";
import termins from "@/data/termins.json";
import { calculateTimeDifference } from "@/utils/dateCalculations";
import { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

export default function Terms() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const startSemesterDay = new Date("2026-02-16");
  const endSemesterDay = new Date("2026-05-16");

  const { days, hours, minutes, seconds } = calculateTimeDifference(
    currentTime,
    endSemesterDay,
  );
  const { days: totalSemesterDays } = calculateTimeDifference(
    startSemesterDay,
    endSemesterDay,
  );

  const daysPassed = Math.min(totalSemesterDays - days - 1, totalSemesterDays);

  const percentagePassed = daysPassed / totalSemesterDays;

  useEffect(() => {
    if (endSemesterDay < currentTime) return;

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(() => {
    let date: string | null = null;
    if (Platform.OS === "web") {
      date = localStorage.getItem("date");
    }
    return date ? new Date(Number(date)) : undefined;
  });

  return (
    <View>
      <View style={styles.container}>
        <Text>Dnešní datum: {currentTime.toLocaleDateString()}</Text>
      </View>
      <View style={styles.container}>
        <Text>Průběh semestru</Text>
        <ProgressBar color="blue" progress={percentagePassed} />
        <Text>
          {Math.floor(percentagePassed * 100)} % ({daysPassed} /{" "}
          {totalSemesterDays} dnů)
        </Text>
      </View>
      <View style={styles.container}>
        <Text>Důležité termíny</Text>
        <FlatList
          data={termins}
          renderItem={({ item }) => <TermListItem item={item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
      <View style={styles.container}>
        <Text>Zadej datum</Text>
        <DatePicker
          selectedDate={selectedDate ?? currentTime}
          setSelectedDate={setSelectedDate}
        />
        <Text>Počet dnů do zvoleného data: </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Konec semestru za</Text>
        <Text>
          {days}d {hours}h {minutes}m {seconds}s
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {},
});
