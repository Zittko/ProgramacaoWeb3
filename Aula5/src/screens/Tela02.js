import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function Tela02({ route, navigation }) {
  const { usuarioEmail } = route.params || { usuarioEmail: 'admin123@gmail.com' };
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
  const [contadorCliques, setContadorCliques] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardPerfil}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarEmoji}>👑</Text>
        </View>

        <Text style={styles.titulo}>Bem-vindo, Administrador!</Text>
        <Text style={styles.emailBadge}>{usuarioEmail}</Text>

        <View style={styles.divisor} />

        {/* Componente Dinâmico 1: Estatísticas interativas */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{contadorCliques}</Text>
            <Text style={styles.statLabel}>Ações Rápidas</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>Ativo</Text>
            <Text style={styles.statLabel}>Status</Text>
          </View>
        </View>

        {/* Botão Dinâmico de Interação */}
        <TouchableOpacity 
          style={styles.botaoInterativo} 
          onPress={() => setContadorCliques(contadorCliques + 1)}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBotaoInterativo}>✨ Clique para interagir (+1)</Text>
        </TouchableOpacity>

        {/* Botão Dinâmico de Preferências */}
        <TouchableOpacity 
          style={[styles.botaoToggle, notificacoesAtivas ? styles.ativo : styles.inativo]} 
          onPress={() => setNotificacoesAtivas(!notificacoesAtivas)}
        >
          <Text style={styles.textoToggle}>
            🔔 Notificações: {notificacoesAtivas ? 'Ligadas' : 'Desligadas'}
          </Text>
        </TouchableOpacity>

        {/* Botão de Voltar / Sair */}
        <TouchableOpacity 
          style={styles.botaoSair} 
          onPress={() => navigation.navigate('Tela01')}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotaoSair}>Encerrar Sessão (Sair)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    padding: 24,
  },
  cardPerfil: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EBF8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#3182CE',
  },
  avatarEmoji: {
    fontSize: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A202C',
    textAlign: 'center',
    marginBottom: 6,
  },
  emailBadge: {
    fontSize: 13,
    color: '#3182CE',
    backgroundColor: '#EBF8FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
    fontWeight: '500',
    marginBottom: 20,
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  statLabel: {
    fontSize: 12,
    color: '#718096',
    marginTop: 2,
  },
  botaoInterativo: {
    width: '100%',
    height: 46,
    backgroundColor: '#38A169',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 12,
  },
  textoBotaoInterativo: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  botaoToggle: {
    width: '100%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
  },
  ativo: {
    backgroundColor: '#EBF8FF',
    borderColor: '#3182CE',
  },
  inativo: {
    backgroundColor: '#EDF2F7',
    borderColor: '#CBD5E0',
  },
  textoToggle: {
    fontWeight: '600',
    fontSize: 14,
    color: '#2D3748',
  },
  botaoSair: {
    width: '100%',
    height: 46,
    backgroundColor: '#E53E3E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textoBotaoSair: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});