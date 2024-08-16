import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from '../Screens/SignUp';
import Loginpage from '../Screens/Loginpage';
import Homepage from '../Screens/Homepage';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { auth } from "../Configure/Firebaseconfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
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
                        () => logoutFunction()
                },
            ],
        );
    };

    // Logout function
    const logoutFunction = async () => {
        auth.signOut();
        console.log('Logging out');
        removeObjectFromAsyncStorage('user');
        navigation.navigate('Login');
    }

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