import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tela02({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a Tela 02</Text>
      <Button
        title="Voltar para Tela 01"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});