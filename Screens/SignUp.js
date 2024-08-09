import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const SignUp = () => {
    const [userName, setEntereUserName] = useState('');
    const [password, setEnteredPassword] = useState('');

    function registerUser() {
        console.log('Username:', userName);
        console.log('Password:', password);
    }

    onload = () => {
        console.log('App Loaded');
    }

    oncancel = () => {
        console.log('App Cancelled');
    }

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
                        onPress={registerUser}>
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