import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from '../Screens/SignUp';
import Loginpage from '../Screens/Loginpage';
import Homepage from '../Screens/Homepage';
import { Button } from 'react-native';
import { Alert } from 'react-native';

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