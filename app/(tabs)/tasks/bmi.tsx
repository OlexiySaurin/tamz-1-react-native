import Slider from "@react-native-community/slider";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";

export default function BMICalculator() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<number>();

  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();

  const bmi =
    weight !== undefined && height !== undefined
      ? weight / (height / 100) ** 2
      : undefined;

  const calculateBMI = () => {
    alert(`Your BMI is: ${bmi?.toFixed(2)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>BMI Calculator</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Enter your name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={age?.toString()}
            onChangeText={(text) => setAge(Number(text))}
            placeholder="Enter your age"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>

          <View style={styles.radioRow}>
            <View style={styles.radioItem}>
              <RadioButton
                value="Male"
                status={gender === 0 ? "checked" : "unchecked"}
                onPress={() => setGender(0)}
              />
              <Text>Male</Text>
            </View>

            <View style={styles.radioItem}>
              <RadioButton
                value="Female"
                status={gender === 1 ? "checked" : "unchecked"}
                onPress={() => setGender(1)}
              />
              <Text>Female</Text>
            </View>

            <View style={styles.radioItem}>
              <RadioButton
                value="Prefer not to say"
                status={gender === 2 ? "checked" : "unchecked"}
                onPress={() => setGender(2)}
              />
              <Text>Prefer not</Text>
            </View>
          </View>
        </View>

        <View style={styles.sliderGroup}>
          <Text style={styles.label}>Height</Text>
          <Slider
            style={styles.slider}
            minimumValue={100}
            maximumValue={220}
            minimumTrackTintColor="#4CAF50"
            maximumTrackTintColor="#ccc"
            onValueChange={(value) => setHeight(value)}
          />
          <Text style={styles.sliderValue}>
            Height: {height?.toFixed(0) ?? 0} cm
          </Text>
        </View>

        <View style={styles.sliderGroup}>
          <Text style={styles.label}>Weight</Text>
          <Slider
            style={styles.slider}
            minimumValue={30}
            maximumValue={200}
            minimumTrackTintColor="#2196F3"
            maximumTrackTintColor="#ccc"
            onValueChange={(value) => setWeight(value)}
          />
          <Text style={styles.sliderValue}>
            Weight: {weight?.toFixed(0) ?? 0} kg
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.calculateButton,
              bmi === undefined && styles.buttonDisabled,
            ]}
            disabled={bmi === undefined}
            onPress={calculateBMI}
          >
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  inputGroup: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },

  radioRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  radioItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  sliderGroup: {
    marginTop: 15,
  },

  slider: {
    width: "100%",
    height: 40,
  },

  sliderValue: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 16,
  },

  buttonContainer: {
    marginTop: 20,
  },
  calculateButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  buttonDisabled: {
    backgroundColor: "#a5d6a7",
  },
});
