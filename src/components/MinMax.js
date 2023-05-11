import React from "react";
import { Text } from "react-native";
import styles from "./styles";
export default function MinMax(props) {
    console.warn(props);
  return (
    <Text style={styles.BigTxt}>The value {props.x} is bigger than the value {props.y}!</Text>
  );
}
