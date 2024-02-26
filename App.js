import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MainChanges from './screens/MainChanges';
import Products from './screens/Products';




const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      {/* Nav bar */}
      <Stack.Navigator>
        <Stack.Screen name="#" component={HomeScreen} />
      </Stack.Navigator>
      <Products/>
      <MainChanges/>


      {/* Footer buttons */}
      {/* <Stack.Navigator>
        <Stack.Screen name="FooterButtons" component={MainChanges}></Stack.Screen>
      </Stack.Navigator> */}
    </NavigationContainer>

    
  );
}

