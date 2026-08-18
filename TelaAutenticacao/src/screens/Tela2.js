import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Tela2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Painel Principal</Text>
          <Text style={styles.subtitle}>Escolha uma opção abaixo</Text>
        </View>
        
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuCard} onPress={() => alert('Perfil')}>
            <Text style={styles.menuText}>👤 Perfil do Usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard} onPress={() => alert('Configurações')}>
            <Text style={styles.menuText}>⚙️ Configurações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuCard, styles.logoutCard]} onPress={() => this.props.navigation.goBack()}>
            <Text style={[styles.menuText, styles.logoutText]}>🚪 Sair</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  menuContainer: {
    width: '100%',
    maxWidth: 400,
  },
  menuCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  logoutCard: {
    backgroundColor: '#fef2f2',
    borderColor: '#fee2e2',
    marginTop: 20,
  },
  logoutText: {
    color: '#dc2626',
  }
});