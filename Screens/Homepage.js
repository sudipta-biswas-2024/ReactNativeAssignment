import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Homepage = () => {
    const [items, setItems] = useState([]);
    const fetch = require('node-fetch');
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.restful-api.dev/objects');
                const data = await response.json();

                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    handlePress = (item) => {
        console.log('Pressed:', item);
        if (item.data == null) {
            console.log('Data not available');
            Alert.alert(
                'No data available',
                'All the available data is missing here',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ],
            );
        } else {
            navigation.navigate('Detail', { itemDetailObj: item });
        }
    }

    // Rest of the code
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={require('../assets/HomePageTop.png')}
                />
            </View>
            <View style={styles.flatlistContainer}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        renderItemText(item)
                    }
                />
            </View>
        </View>
    );
}

function renderItemText(item) {
    return (
        <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.renderItemTextContainer}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdc3c7',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    innercontainer: {
        backgroundColor: '#2c3e50',
        width: '100px',
        height: '100px',
        padding: 20,
        borderRadius: 50,
        margin: 20,
    },
    flatlistContainer: {
        flex: 1,
        width: '100%',
        bottommargin: 20,
    },
    renderItemTextContainer: {
        backgroundColor: '#22ff00',
        height: 'auto',
        padding: 20,
        margin: 10,
        borderRadius: 20,
    }
});

export default Homepage;


