import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";

export default function KeyboardAvoidWrapper({ children }: any) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
