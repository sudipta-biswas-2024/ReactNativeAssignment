import React from 'react'
import { View, StyleSheet, Image, FlatList, Text } from 'react-native';

const Homepage = () => {
    const data = [
        { key: '1', name: 'Item 1' },
        { key: '2', name: 'Item 2' },
        { key: '3', name: 'Item 3' },
        { key: '4', name: 'Item 4' },
        { key: '5', name: 'Item 5' },
        { key: '6', name: 'Item 6' },
        { key: '7', name: 'Item 7' },
        { key: '8', name: 'Item 8' },
        { key: '9', name: 'Item 9' },
        { key: '10', name: 'Item 10' },
        // Add more items as needed
    ];

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
                    data={data}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) =>
                        renderItemText(item)
                    }
                />
            </View>
        </View>
    );
}

function renderItemText(item) {
    return (<View style={styles.renderItemTextContainer}>
        <Text style={{ fontSize: '30px', fontWeight: 'bold' }}>
            {item.name}
        </Text>
    </View>);
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


