import React from "react";
import { Text, View, Image } from "react-native";
import styles from './AppStyles';

export const AppHeader = () => {
    return (
      <View style={styles.buatHeader}>
        <Text style={styles.text_big}>Ahmad Naoval Annasik</Text>
      </View>
    )
  }
  
export const AppContent = () => {
    return (
      <View >
        <Text style={styles.textContent}>1103194008</Text>
        <Image source={{uri: 'https://adaptivenetworklab.org/img/team/noval.png'}} style={styles.gambar}></Image>
      </View>
    )
  }
  