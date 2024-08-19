import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Configure/Firebaseconfig';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Loginpage() {
    const [userName, setEntereUserName] = useState('');
    const [password, setEnteredPassword] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        onload();
    }, []);


    function navigateToSignUp() {
        console.log('Navigating to Sign Up Page');
        navigation.navigate('SignUp');

    };

    onload = () => {
        console.log('App Loaded');
    }

    oncancel = () => {
        console.log('App Cancelled');
    }

    // Function to validate email
    emailvalidation = (email) => {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    const handleLogin = async () => {
        console.log('Username:', userName);
        console.log('Password:', password);
        if (userName == '' || password == '') {
            Alert.alert(
                'Invalid Input',
                'Please enter valid username and password',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ],
            );
            return;
        } else if (!emailvalidation(userName)) {
            Alert.alert(
                'Invalid Email',
                'Please enter valid email address',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ],
            );
            return;
        } else if (password.length < 6) {
            Alert.alert(
                'Invalid Password',
                'Password should be atleast 6 characters',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                ],
            );
            return;
        }

        if (userName && password) {
            try {
                await signInWithEmailAndPassword(auth, userName, password);
                Alert.alert(
                    'Signed In Successfully',
                    'You have signed in successfully',
                    [
                        {
                            text: 'Ok',
                            onPress: () => navigation.navigate('Home'),
                            style: 'default',
                        },
                    ],
                );
                renderView();
            } catch (e) {
                Alert.alert(
                    'Failed to Sign In',
                    'User may not exist or password is incorrect',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                    ],
                );
            }
        } else {
            Alert.alert('Invalid Input', 'Please enter valid username and password');
        }
    };

    // Function to check if user is signed in
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log(user.email);
            console.log(user.uid);
            saveUserInformation(user);
        } else {
            console.log('User is signed out');
            removeUserFromSaved('user');
        }
    });

    // Function to remove object from async storage
    async function removeUserFromSaved(key) {
        try {
            await AsyncStorage.removeItem(key);
            console.log('Object removed successfully');
        } catch (error) {
            console.error('Error removing object:', error);
        }
    }

    // Function to save user information in local storage
    async function saveUserInformation(user) {
        try {
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            };

            await AsyncStorage.setItem('user', JSON.stringify(userData));
            console.log('User information saved successfully');
        } catch (error) {
            console.error('Error saving user information:', error);
        }
    }

    const renderView = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Welcome to the Login Page</Text>
                <View style={{ padding: 20 }}><Image source={require('../assets/applicationLogo.png')} style={{ width: 200, height: 200 }} /></View>
                <View style={styles.innercontainer}>
                    <View>
                        <Text style={styles.inputTitle}>Username:</Text>
                        <View style={styles.inputViews}>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter your username'
                                placeholderTextColor={'gray'}
                                onChangeText={(enteredText) => setEntereUserName(enteredText)}
                            />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={styles.inputTitle}>Password:</Text>
                        <View style={styles.inputViews}>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter your password'
                                placeholderTextColor={'gray'}
                                secureTextEntry={true}
                                onChangeText={(enteredText) => setEnteredPassword(enteredText)}
                            />
                        </View>
                    </View>
                    <View style={{ margin: 20, alignItems: 'center', paddingTop: 20 }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogin}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.signUpButton}
                            onPress={navigateToSignUp}>
                            <Text style={styles.signUpButtonText}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    return renderView();


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
        width: '80%',
        height: 'auto',
        padding: 20,
        borderRadius: 20,
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8e44ad',
        padding: 10,
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 12,
        padding: 5,
        color: '#3498db',
    },
    inputViews: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'gray',
    },
    input: {
        height: 50,
        margin: 10,
        borderWidth: 0,
        padding: 10,
        fontSize: 18,
        color: 'white',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1abc9c',
        padding: 10,
        borderRadius: 10,
        width: '50%',
        height: 50,
    },
    buttonText: {
        textAlign: 'justify',
        margin: 'auto',
        fontSize: 20,
        fontWeight: 'bold',
    },
    signUpButton: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        height: 50,
    },
    signUpButtonText: {
        textAlign: 'justify',
        margin: 'auto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ecf0f1',
    },
});

export default Loginpage;