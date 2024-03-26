import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import { Button } from 'react-native';
import One from './Screens/One';
import Two from './Screens/Two';
import Three from './Screens/Three';
import Four from './Screens/Four';
import Five from './Screens/Five';
import Six from './Screens/Six';
import Seven from './Screens/Seven';
import Eight from './Screens/Eight';
import Nine from './Screens/Nine';
import Ten from './Screens/Ten';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name = "Home" component={(HomeScreen)}
      />

      <Stack.Screen name = "Screen 1" component={(One)}
      />

      <Stack.Screen name = "Screen 2" component={(Two)}
      />

      <Stack.Screen name = "Screen 3" component={(Three)}
      />

      <Stack.Screen name = "Screen 4" component={(Four)}
      />

      <Stack.Screen name = "Screen 5" component={(Five)}
      />

      <Stack.Screen name = "Screen 6" component={(Six)}
      />

      <Stack.Screen name = "Screen 7" component={(Seven)}
      />

      <Stack.Screen name = "Screen 8" component={(Eight)}
      />

      <Stack.Screen name = "Screen 9" component={(Nine)}
      />

      <Stack.Screen name = "Screen 10" component={(Ten)}
      />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
