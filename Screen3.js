import * as React from 'react';
import styles from './AppStyles';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export const ListScreen = ({navigation}) => {
    const movies = [
        {"id": 0, "value": "The Squid Game"},
        {"id": 1, "value": "hometown cha cha cha"},
        {"id": 2, "value": "ter"},
        {"id": 3, "value": "wwww"},
    ];
    return(
        <View style={{flex:1}}>
            <Text style={styles.text_big}>Movie List Screen</Text>
            {movies.map((item) =>(
                <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailScreen', {itemId:item.id})}>
                    <View key={item.id} style={styles.button}>
                        <Text style={styles.buttonText} key={item.id}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

