import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import H1 from "@/components/Typography/H1";
import Paragraph from "@/components/Typography/p";
import InputOne from "@/components/Input/InputOne";
import Checkbox from "expo-checkbox";
import ProgressBar from "@/components/misc/ProgressBar";
import { router } from "expo-router";

export default function Page() {
  const [formState, setFormState] = useState<any>();
  const [isChecked, setChecked] = useState(false);


  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Pressable
            onPress={() => console.log("Pressed")}
            style={styles.backBtn}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <View style={styles.headerTimeline}>
            <Text style={{ fontWeight: "600", fontSize: 24 }}>Step 1 of 3</Text>
          </View>
        </View>
        <ProgressBar progress={1/3 * 100} />
      </View>
      <View style={styles.emailContainer}>
        <AntDesign
          style={styles.emailIcon}
          name="mail"
          size={30}
          color="black"
        />
      </View>

      <View style={styles.bodyText}>
        <H1 text="Create Acount" />
        <Paragraph
          text="To get started, create an account. This is to help us keep your financial information safe and secure"
          extraStyle={{ color: "#5b5b5b" }}
        />
      </View>

      <View style={styles.formContainer}>
        <InputOne
          inputHandler={setFormState}
          placeholder="Email Address"
          keyboardType="email-address"
        />
        <InputOne
          inputHandler={setFormState}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#44dba4" : undefined}
          />
          <Text style={{ paddingHorizontal: 10, color: "#5b5b5b", fontSize: 17 }}>
            I confirm that i have throughly read and agree to the terms outlined
            in our User Agreement and privacy Policy
          </Text>
        </View>

        <Pressable
          style={{
            backgroundColor: "#0c111d",
            padding: 20,
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={() => router.push("/verify-email")}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "500" }}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    borderBottomColor: "#f3f3f6",
    borderBottomWidth: 0.5,
  },
  header: {
    position: "relative",
    paddingVertical: 10,
    paddingHorizontal: "3%",
  },
  headerTimeline: {
    alignSelf: "center",
  },
  backBtn: {
    position: "absolute",
    left: 20,
    top: "40%",
  },
  emailContainer: {
    paddingHorizontal: "3%",
    marginTop: 20,
  },
  emailIcon: {
    maxWidth: 60,
    backgroundColor: "#fcfcfd",
    borderRadius: 100,
    padding: 15,
    paddingVertical: 13,
    borderColor: "#959595",
    borderWidth: 1,
  },
  bodyText: {
    paddingHorizontal: "3%",
    marginTop: 25,
  },
  formContainer: {
    paddingHorizontal: "3%",
    marginTop: 25,
  },
});
