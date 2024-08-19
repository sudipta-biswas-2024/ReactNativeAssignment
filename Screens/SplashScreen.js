import { View, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            retrieveUserInformationAndNavigate();
        }, 4000);
        return () => clearTimeout(timer);
    }, [navigation]);

    // Function to retrieve user information from AsyncStorage and navigate to the appropriate screen
    async function retrieveUserInformationAndNavigate() {
        try {
            const userString = await AsyncStorage.getItem('user');
            if (userString) {
                const userData = JSON.parse(userString);
                console.log('Retrieved user information:', userData);
                if (userData.uid && userData.email) {
                    navigation.navigate('Home');
                }
            } else {
                navigation.replace('Login');
                console.log('No user information found');
            }
        } catch (error) {
            navigation.replace('Login');
            console.error('Error retrieving user information:', error);
        }
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/applicationLogo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d08735',
    },
    image: {
        width: 300,
        height: 300,
    }
});

export default SplashScreen;