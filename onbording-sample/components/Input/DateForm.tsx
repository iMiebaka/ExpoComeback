import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

interface ITProps {
  placeholder?: string;
  inputHandler: (value: string) => void;
}
export default function DateForm({ placeholder, inputHandler }: ITProps) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    inputHandler(currentDate);
    console.log("Hwe");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.placeholderField}>{placeholder}</Text>
          <Text>{date.toDateString()}</Text>
        </View>
        <Pressable onPress={() => setShow(true)}>
          <AntDesign name="calendar" size={30} color="black" />
        </Pressable>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
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
