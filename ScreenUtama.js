import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen} from "./Screen1";
import { AboutScreen, AppHeaderWoLogo } from "./Screen2";
import { ListScreen } from './Screen3';
import { DetailScreen } from './Screen4';


const Stack = createNativeStackNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MovieList" screenOptions={{headerShown:true}}>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "My Home"}} />
                <Stack.Screen name="About" component={AboutScreen} options={{title: "Our Profile"}} />
                <Stack.Screen name="MovieList" component={ListScreen} options={{title: "Movie List", headerStyle: {backgroundColor: 'blue'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'}}} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} options={{title: "Movie Detail", headerTitle:(props) => <AppHeaderWoLogo {...props}/> }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppHome;

