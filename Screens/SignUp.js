import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Configure/Firebaseconfig';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [userName, setEntereUserName] = useState('');
    const [password, setEnteredPassword] = useState('');
    const navigation = useNavigation();

    // Function to validate email
    emailvalidation = (email) => {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function userAlreadyExists() {
        Alert.alert(
            'User Exists',
            'User already exists',
            [
                {
                    text: 'Go to Login', onPress:
                        () => navigation.navigate('Login')
                },
            ],
        );
    }

    function userCreatedAlert() {
        Alert.alert(
            'Successfully Signed Up',
            'You have signedup successfully',
            [
                {
                    text: 'Go to Login', onPress:
                        () => navigation.navigate('Login')
                },
            ],
        );
    }

    const signUpUserWithEmailAndPass = async () => {
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
                await createUserWithEmailAndPassword(auth, userName, password);
                console.log('User Created');
                userCreatedAlert();
            } catch (e) {
                console.error(e);
                userAlreadyExists();
            }
        } else {
            // Show Error
        }
    };

    // Onload and oncancel functions
    onload = () => {
        console.log('App Loaded');
    }

    oncancel = () => {
        console.log('App Cancelled');
    }

    // Return the UI
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titleText}>Please register here</Text>
            <View style={{ padding: 20 }}><Image source={require('../assets/applicationLogo.png')} style={{ width: 200, height: 200 }} /></View>
            <View style={styles.innercontainer}>
                <View>
                    <Text style={styles.inputTitle}>Email Address:</Text>
                    <View style={styles.inputViews}>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter your email address'
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
                        onPress={signUpUserWithEmailAndPass}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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


export default SignUp;