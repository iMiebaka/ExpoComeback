import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import H1 from "@/components/Typography/H1";
import Paragraph from "@/components/Typography/p";
import InputOne from "@/components/Input/InputOne";
import Checkbox from "expo-checkbox";
import ProgressBar from "@/components/misc/ProgressBar";
import { router } from "expo-router";

export default function VerifyEmailPage() {
  const [formState, setFormState] = useState<any>();


  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Pressable
            onPress={router.back}
            style={styles.backBtn}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <View style={styles.headerTimeline}>
            <Text style={{ fontWeight: "600", fontSize: 24 }}>Step 2 of 3</Text>
          </View>
        </View>
        <ProgressBar progress={2/3 * 100} />
      </View>
      <View style={styles.emailContainer}>
        <AntDesign
          style={styles.emailIcon}
          name="lock1"
          size={30}
          color="black"
        />
      </View>

      <View style={styles.bodyText}>
        <H1 text="Verify your Email" />
        <Paragraph
          text="We just sent a 6-digit code to xyz@gmail.com enter it below"
        />
      </View>

      <View style={styles.formContainer}>
        <InputOne
          inputHandler={setFormState}
          placeholder="Code"
          keyboardType="number-pad"
        />

        <Pressable
          style={{
            backgroundColor: "#0c111d",
            padding: 20,
            borderRadius: 20,
            marginTop: 20,
          }}
          onPress={() => router.push("/personal-information")}

        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "500" }}>Verify Email</Text>
        </Pressable>

        <Pressable>
          <Text style={{ textAlign: "center", marginTop: 25, color: "#2d3848", fontSize: 20, fontWeight: "500" }}>Resend Code</Text>
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
