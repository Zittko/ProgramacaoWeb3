import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela01 from './src/Tela01';
import Tela02 from './src/Tela02';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela01">
        <Stack.Screen
          name="Tela01"
          component={Tela01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela02"
          component={Tela02}
          options={{ title: 'Início', headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}