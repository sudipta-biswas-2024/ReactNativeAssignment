import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from './SignUp';
import Loginpage from './Loginpage';
import Homepage from './Homepage';
import { Button } from 'react-native';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
*/
function AppNavigation() {
    const navigation = useNavigation();
    const showAlert = () => {
        Alert.alert(
            'Logout',
            'Do you want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes', onPress:
                        () => navigation.navigate('Login')
                },
            ],
        );
    };


    return (
        /* if Autheticated  {
             // Logged in Stack
         } else {
             // Non - logged in Stack
         }*/
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Loginpage} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen
                name="Home"
                component={Homepage}
                options={{
                    headerTitle: "Dashboard",
                    headerShown: true,
                    gestureEnabled: false,
                    headerBackVisible: false,
                    headerShadowVisible: true,
                    headerRight: () => <Button title="Logout" onPress={showAlert} />,
                }}
            />
        </Stack.Navigator>
    );
}

export default AppNavigation;