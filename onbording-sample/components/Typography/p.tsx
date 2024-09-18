import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import React, { ReactNode } from "react";

export default function Paragraph({
  text,
  extraStyle,
}: {
  text: ReactNode;
  extraStyle?: StyleProp<TextStyle>;
}) {
  return <Text style={[styles.p, extraStyle]}>{text}</Text>;
}

const styles = StyleSheet.create({
  p: {
    fontSize: 20,
    color: "#5b5b5b" 
  },
});
