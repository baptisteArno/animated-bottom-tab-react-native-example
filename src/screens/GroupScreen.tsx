import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const GroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Group</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74b9ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
