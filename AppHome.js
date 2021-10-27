import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './AppStyles';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Text>Home Screen</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        </View>
    )
}

const AboutScreen = ({ navigation }) => {
    return (
        <View style = {styles.container} >
            <Text>About Screen</Text>
            <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}

const Stack = createNativeStackNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default AppHome;