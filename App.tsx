import React from "react";
import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {BottomMenu} from "./src/components/BottomMenu/BottomMenu";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <BottomMenu/>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
