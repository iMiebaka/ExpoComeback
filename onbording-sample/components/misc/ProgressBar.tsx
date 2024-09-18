import { View } from "react-native";

export default function ProgressBar({ progress }: { progress?: number }) {
  return (
    <View
      style={{
        borderBottomColor: "#44dba4",
        borderBottomWidth: 1,
        width: `${progress ?? 100}%`,
      }}
    />
  );
}
