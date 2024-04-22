import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Row = ({ name, phone }) => (
  <View style={styles.row}>
    <Text>{name}</Text>
    <Text>{phone}</Text>
  </View>
);

export default Row;

const styles = StyleSheet.create({
  row: {
    padding: 20,
  },
});