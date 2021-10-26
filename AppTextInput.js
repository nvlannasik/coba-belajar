import React from "react";
import { Text, View, Image, TextInput, Button, StyleSheet, Alert } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth:1,
        padding:10,
    },
});

const AppTextInput = () => {
    return(
        <View>
            <Text>Nama</Text>
            <TextInput placeholder="Write Your Name" style={styles.input}/>
            <Text>Age</Text>
            <TextInput placeholder="Write Your Age" keyboardType="numeric" style={styles.input}/>
            <Text>Email</Text>
            <TextInput placeholder="Write Your Email" keyboardType="email-address" style={styles.input}/>
            <Button title="save" onPress={() => Alert.alert('data sudah disimpan')} />

        </View>
    )
}

export default AppTextInput;