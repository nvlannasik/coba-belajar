import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AppHeader, AppContent } from "./AppCustomComponents";

const HelloWorldApp = () => {
  return(
    <View >
      <AppHeader/>
      <AppContent/>
    </View>
  )
}
export default HelloWorldApp;