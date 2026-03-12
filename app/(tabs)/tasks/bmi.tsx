import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function BMICalculator() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<number>();
  return (
    <View>
      <View>
        <Text>Icon placeholder</Text>
        <Text>Username</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View>
        <Text>Icon placeholder</Text>
        <Text>Age</Text>
        <TextInput value={age} onChangeText={(text) => setAge(text)} />
      </View>
      <View>
        <RadioButton
          value="Male"
          status={gender === 0 ? "checked" : "unchecked"}
          onPress={() => setGender(0)}
        />
        <RadioButton
          value="Female"
          status={gender === 1 ? "checked" : "unchecked"}
          onPress={() => setGender(1)}
        />
        <RadioButton
          value="Prefer not to say"
          status={gender === 2 ? "checked" : "unchecked"}
          onPress={() => setGender(2)}
        />
      </View>
    </View>
  );
}
{
  /* labels in material design! */
}
