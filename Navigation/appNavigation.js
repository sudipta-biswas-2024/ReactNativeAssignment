import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from '../Screens/SignUp';
import Loginpage from '../Screens/Loginpage';
import Homepage from '../Screens/Homepage';
import DetailPage from '../Screens/DetailPage';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { auth } from "../Configure/Firebaseconfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from "../Screens/SplashScreen";

const Stack = createNativeStackNavigator();

// App Navigation
function AppNavigation() {
    const navigation = useNavigation();

    // Function to show alert
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
                        () => logoutFunction()
                },
            ],
        );
    };

    // Logout function
    const logoutFunction = async () => {
        auth.signOut();
        removeObjectFromAsyncStorage('user');
        console.log('Logging out');
        navigation.navigate('Login', { animation: 'none' });
    }

    // Function to remove object from async storage
    async function removeObjectFromAsyncStorage(key) {
        try {
            await AsyncStorage.removeItem(key);
            console.log('Object removed successfully');
        } catch (error) {
            console.error('Error removing object:', error);
        }
    }

    return (
        /* if Autheticated  {
             // Logged in Stack
         } else {
             // Non - logged in Stack
         }*/
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash"
                component={SplashScreen}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                    headerBackVisible: false,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen name="Login"
                component={Loginpage}
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                    headerBackVisible: false,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen name="SignUp"
                component={SignUp}
            />
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
            <Stack.Screen name="Detail"
                component={DetailPage}
                options={{
                    headerTitle: "Detail Description",
                    headerShown: true,
                    gestureEnabled: true,
                    headerBackVisible: true,
                }}
            />
        </Stack.Navigator>
    );
}

export default AppNavigation;