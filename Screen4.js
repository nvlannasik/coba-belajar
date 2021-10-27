import * as React from 'react';
import styles from './AppStyles';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

export const DetailScreen = ({route, navigation}) => {
    const { itemId } = route.params;

    const movies = [
        {"id": 0, "value":'The Squid Game', "img":require('./images/logo.png')},
        {"id": 1, "value": "hometown cha cha cha", "img":require('./images/logo.png')},
        {"id": 2, "value": "ter", "img":require('./images/logo.png')},
        {"id": 3, "value": "wwww", "img":require('./images/logo.png')},
    ];

    const selectedMovie = movies[itemId];

    return (
        <View style={{flex: 1}}>
            <Text>Detail Screen</Text>
            <Text>Moview ID: {selectedMovie.id} </Text>
            <Text>Moview Title: {selectedMovie.value} </Text>
            <Image source={selectedMovie.img} style={styles.gambarMovie} />
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
    )




}