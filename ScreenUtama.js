import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen} from "./Screen1";
import { AboutScreen } from "./Screen2";


const Stack = createNativeStackNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "My Home"}} />
                <Stack.Screen name="About" component={AboutScreen} options={{title: "Our Profile"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppHome;

