import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>TAMZ Tasks App</Text>

      <Text style={styles.subtitle}>Mobile Applications Development I</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 About This App</Text>

        <Text style={styles.text}>
          This application contains tasks and projects created for the TAMZ 1
          (Mobile Applications Development) course.
        </Text>

        <Text style={styles.text}>
          The app is built using React Native and Expo and demonstrates
          different mobile development concepts learned during the course.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧩 What You Can Find Here</Text>

        <Text style={styles.listItem}>• Individual course tasks</Text>
        <Text style={styles.listItem}>• Mobile UI components</Text>
        <Text style={styles.listItem}>• Navigation examples</Text>
        <Text style={styles.listItem}>• Small projects</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>👨‍💻 Author</Text>

        <Text style={styles.text}>Created as part of the TAMZ 1 course.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,

    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },

  text: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
  },

  listItem: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 4,
  },
});
