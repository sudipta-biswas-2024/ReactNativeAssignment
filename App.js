import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './appNavigation';

function App() {

  onload = () => {
    console.log('App Loaded');
  }

  oncancel = () => {
    console.log('App Cancelled');
  }

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
export default App;