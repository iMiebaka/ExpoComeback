import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

export default function H1({ text }: { text: ReactNode }) {
  return <Text style={styles.h1}>{text}</Text>;
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "500",
  },
});
