import * as React from 'react';
import styles from './AppStyles';
import { View, Text, Button, ViewComponent, TextInput, Image } from 'react-native';

export const AboutScreen = ({ navigation }) => {
    return (
        <View style = {styles.container} >
            <Text>About Screen</Text>
            <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};

export const AppHeaderWoLogo = () => {
    return(
        <View style={styles.headerWoLogo}>
            <TextInput placeholder="ketik kata kunci disini" style={styles.kataKunci} />
            <Image style= {styles.gambarsisip} source={require("./images/discord.svg")} />
        </View>
    )
}
