import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Settings = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
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
  detail: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default Settings;
