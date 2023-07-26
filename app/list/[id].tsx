import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

type Props = {};

const ListDetails = (props: Props) => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerTitle: `Details for #${id}` }}
      ></Stack.Screen>
      <Text style={styles.details}>ProductId: {id}</Text>
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
  details: {
    fontSize: 24,
  },
});

export default ListDetails;
