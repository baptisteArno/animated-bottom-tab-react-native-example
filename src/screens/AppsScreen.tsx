import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const AppsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Apps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#55efc4",
    alignItems: "center",
    justifyContent: "center",
  },
});
