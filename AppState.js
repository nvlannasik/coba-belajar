import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from './AppStyles';

const AppState = () => {
    const [count, setCount] = useState (0);
    return(
        <View style={styles.container}>
            <Text> You Clicked {count} times </Text>
            <Button onPress={() => setCount(count + 1)} title="click me" />
        </View>
    );
};

export default AppState;

