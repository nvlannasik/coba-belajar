import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  text_big: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gambar: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  }
})

const HelloWorldApp = () => {
  return(
    <View style= {styles.container}>
      <Text style= {styles.text_big}>Hello World!</Text>
      <Text style= {styles.text_big}>Hellow React Native</Text>
      <Image source={require('./images/logo.png')} style={styles.gambar}></Image>
    </View>
  )
}
export default HelloWorldApp;