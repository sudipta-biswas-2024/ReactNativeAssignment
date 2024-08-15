import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZELEPEsalPJ3F-7HmaE62MQhe33GY4zo",
    authDomain: "loginappreactnative-db6ed.firebaseapp.com",
    projectId: "loginappreactnative-db6ed",
    storageBucket: "loginappreactnative-db6ed.appspot.com",
    messagingSenderId: "920742512484",
    appId: "1:920742512484:web:1b194bfa85169906779c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;