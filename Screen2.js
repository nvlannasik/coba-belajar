import * as React from 'react';
import styles from './AppStyles';
import { View, Text, Button } from 'react-native';

export const AboutScreen = ({ navigation }) => {
    return (
        <View style = {styles.container} >
            <Text>About Screen</Text>
            <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}
