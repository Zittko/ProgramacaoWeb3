import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tela03({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a Tela 03</Text>
      <Button
        title="Ir para Tela 02"
        onPress={() => navigation.navigate('Tela02')}
      />
      <br></br>
      <Button
        title="Ir para Tela 01"
        onPress={() => navigation.navigate('Tela01')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4eb1f3ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});