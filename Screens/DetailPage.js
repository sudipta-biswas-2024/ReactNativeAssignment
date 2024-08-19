import { View, Text, StyleSheet } from 'react-native'
import { React } from 'react'

const DetailPage = ({ route }) => {
    const { itemDetailObj } = route.params;

    // Object Destructuring
    const { data: { capacity, color, price, year, generation, Description, } } = itemDetailObj;
    const { name } = itemDetailObj;

    console.log('Object:', itemDetailObj);

    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Text style={styles.textStyle}>Name : {name ? name : 'Name not available'}</Text>
            <Text style={styles.textStyle}>Capacity : {capacity ? capacity : 'Capacity not available'}</Text>
            <Text style={styles.textStyle}>Color : {color ? color : 'Color not available'}</Text>
            <Text style={styles.textStyle}>Price : {price ? price : 'Price not available'}</Text>
            <Text style={styles.textStyle}>Year : {year ? year : 'Year not available'}</Text>
            <Text style={styles.textStyle}>Generation : {generation ? generation : 'Generation not available'}</Text>
            <Text style={styles.textStyle}>Description : {Description ? Description : 'Description not available'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default DetailPage;