import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela01 from './src/screens/Tela01';
import Tela02 from './src/screens/Tela02';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela01">
        <Stack.Screen 
          name="Tela01" 
          component={Tela01} 
          options={{ title: 'Início' }}
        />
        <Stack.Screen 
          name="Tela02" 
          component={Tela02} 
          options={{ title: 'Segunda Tela' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}