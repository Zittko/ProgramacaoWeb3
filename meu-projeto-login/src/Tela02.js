import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Tela02({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menu Principal</Text>
      <Text style={styles.subtitulo}>Bem-vindo, Admin!</Text>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.itemMenu}>
          <Text style={styles.textoItem}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu}>
          <Text style={styles.textoItem}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.itemMenu, styles.itemSair]}
          onPress={() => navigation.navigate('Tela01')}
        >
          <Text style={styles.textoItemSair}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 32,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8,
    marginBottom: 32,
  },
  menu: {
    width: '100%',
    maxWidth: 400,
    gap: 12,
  },
  itemMenu: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
  },
  textoItem: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  itemSair: {
    backgroundColor: '#fee2e2',
    borderColor: '#fca5a5',
    marginTop: 16,
  },
  textoItemSair: {
    fontSize: 16,
    color: '#dc2626',
    fontWeight: 'bold',
  },
});