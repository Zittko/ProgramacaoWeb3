import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela01 from './src/screens/Tela01';
import Tela02 from './src/screens/Tela02';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
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
            options={{ 
              title: 'Perfil Administrativo',
              headerStyle: { backgroundColor: '#3182CE' },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: { fontWeight: 'bold' }
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}