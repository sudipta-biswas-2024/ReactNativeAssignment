import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { React, useLayoutEffect } from 'react'

const DetailPage = ({ route }) => {
    const { itemDetailObj } = route.params;
    const navigation = useNavigation();

    // Object Destructuring
    const { data: { name, capacity, Color, price, year, generation, Description, } } = itemDetailObj;

    console.log('Object:', itemDetailObj);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: itemDetailObj.data.name, // Assuming itemDetailObj has a title property
        });
    }, [navigation, itemDetailObj]);


    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name : {name ? name : 'Name not available'}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Capacity : {capacity ? capacity : 'Capacity not available'}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Color : {Color ? Color : 'Color not available'}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price : {price ? price : 'Price not available'}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Year : {year ? year : 'Year not available'}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Generation : {generation ? generation : 'Generation not available'}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Description : {Description ? Description : 'Description not available'}</Text>
        </View>
    );
}

export default DetailPage;