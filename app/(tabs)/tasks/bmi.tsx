import { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton, TextInput } from 'react-native-paper';

export default function BMICalculator() {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState<number>()
  return (
    <View>
        <View>
            <Text>
                Icon placeholder
            </Text>
            <TextInput
      label="Username"
      value={username}
      onChangeText={text => setUsername(text)}
    />
        </View>
        <View>
            <Text>
                Icon placeholder
            </Text>
            <TextInput label="Age" value={age} 
            onChangeText={(text) => setAge(text)}/>
        </View>
        <View>
            <RadioButton
        value="Male"
        status={ gender === 0 ? "checked" : "unchecked" }
        onPress={() => setGender(0)}
      />
      <RadioButton
        value="Female"
        status={ gender === 1 ? "checked" : "unchecked"}
        onPress={() => setGender(1)}
      />
      <RadioButton
        value="Prefer not to say"
        status={ gender === 2 ? "checked" : "unchecked" }
        onPress={() => setGender(2)}
      />
        </View>
    </View>
  );
}
 {/* labels in material design! */}