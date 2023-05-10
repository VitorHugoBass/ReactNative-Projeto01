import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function App() {
  var plat = "tested";
  if (Platform.OS === "android") {
    plat = "Android";
  } else if (Platform.OS === "ios") {
    plat = "IOS";
  }
  return (
    <View style={styles.container}>
      <Text>{plat } teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
