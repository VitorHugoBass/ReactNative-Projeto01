import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import CusomStyle from "./components/styles";
import MinMax from "./components/MinMax";
import PlatformInfo from "./components/PlatformInfo";

export default function Main() {
  return (
    <View style={styles.container}>
      <MinMax />
      <PlatformInfo />
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
