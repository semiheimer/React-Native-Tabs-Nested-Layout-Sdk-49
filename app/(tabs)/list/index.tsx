import { View, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const List = () => {
  return (
    <View style={styles.container}>
      <Link href="/list/1">Link 1</Link>
      <Link href="/list/2">Link 2</Link>
      <Link href="/list/3">Link 3</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default List;
