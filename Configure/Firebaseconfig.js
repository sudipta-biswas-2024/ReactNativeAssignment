import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "Your API Key goes here",
    authDomain: "loginappreactnative-db6ed.firebaseapp.com",
    projectId: "loginappreactnative-db6ed",
    storageBucket: "loginappreactnative-db6ed.appspot.com",
    messagingSenderId: "920742512484",
    appId: "Your APP ID goes here"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;