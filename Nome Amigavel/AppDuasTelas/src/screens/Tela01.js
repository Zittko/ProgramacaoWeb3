import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tela01({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a Tela 01</Text>
      <Button
        title="Ir para Tela 02"
        onPress={() => navigation.navigate('Tela02')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});