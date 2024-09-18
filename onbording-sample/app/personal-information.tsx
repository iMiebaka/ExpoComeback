import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import H1 from "@/components/Typography/H1";
import Paragraph from "@/components/Typography/p";
import InputOne from "@/components/Input/InputOne";
import ProgressBar from "@/components/misc/ProgressBar";
import { router } from "expo-router";
import DateForm from "@/components/Input/DateForm";
import KeyboardAvoidWrapper from "@/components/KeyboardAvoidWrapper";

export default function PersonalInformationPage() {
  const [formState, setFormState] = useState<any>();

  return (
    <KeyboardAvoidWrapper>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Pressable onPress={router.back} style={styles.backBtn}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <View style={styles.headerTimeline}>
              <Text style={{ fontWeight: "600", fontSize: 24 }}>
                Step 3 of 3
              </Text>
            </View>
          </View>
          <ProgressBar progress={(3 / 3) * 100} />
        </View>
        <View style={styles.emailContainer}>
          <AntDesign
            style={styles.emailIcon}
            name="user"
            size={30}
            color="black"
          />
        </View>

        <View style={styles.bodyText}>
          <H1 text="Personal Information" />
          <Paragraph
            text="To get started, create an account. This is to help us keep your financial information safe and secure"
            extraStyle={{ color: "#5b5b5b" }}
          />
        </View>

        <View style={styles.formContainer}>
          <InputOne inputHandler={setFormState} placeholder="First Name" />
          <InputOne inputHandler={setFormState} placeholder="Last Name" />
          <InputOne
            inputHandler={setFormState}
            placeholder="Email Address"
            keyboardType="email-address"
          />
          <DateForm placeholder="Date of Birth" inputHandler={setFormState} />

          <InputOne
            inputHandler={setFormState}
            placeholder="Goals"
            hint="*Eg, Saving for a house, reducing debt"
          />

          <Pressable
            style={{
              backgroundColor: "#0c111d",
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
            }}
            onPress={() => Alert.alert("All done")}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidWrapper>
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
