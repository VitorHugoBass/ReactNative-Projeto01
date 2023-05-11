import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

export default function PlatformInfo(){
      var plat = "tested";
  if (Platform.OS === "android") {
    plat = "Android";
  } else if (Platform.OS === "ios") {
    plat = "IOS";
  }
  return (
  
      <Text>Platform info: {plat}</Text>
      
  );
};
