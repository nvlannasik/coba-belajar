import * as React from 'react';
import styles from './AppStyles';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        </View>
    )
}

