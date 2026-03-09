import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.emoji}>🚫</Text>

        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>{"This screen doesn't exist."}</Text>

        <Link href="/" style={styles.button}>
          Go Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  emoji: {
    fontSize: 64,
    marginBottom: 10,
  },

  title: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: 18,
    color: "#9ca3af",
    marginTop: 8,
    marginBottom: 30,
    textAlign: "center",
  },

  button: {
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "600",
  },
});