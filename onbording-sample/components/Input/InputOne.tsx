import {
  View,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
  TextInput,
} from "react-native";
import React from "react";

interface ITProps {
  placeholder?: string;
  inputHandler: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  hint?: string;
}
export default function InputOne({
  placeholder,
  inputHandler,
  keyboardType = "default",
  secureTextEntry = false,
  hint= "",
}: ITProps) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.placeholderField}>{placeholder}</Text>
        <TextInput
          onChangeText={inputHandler}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <Text style={{marginTop: -10, color: "gray"}}>{hint}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "#959595",
    padding: 10,
    borderRadius: 4,
    marginBottom: 15,
  },
  placeholderField: {
    color: "#959595",
  },
  text: {
    fontSize: 24,
  },
  input: {
    margin: 10,
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 22,
    textAlign: "center",
    backgroundColor: "lightgrey",
  },
});
