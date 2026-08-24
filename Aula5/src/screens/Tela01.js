import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

export default function Tela01({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    // Validação estrita solicitada
    if (email === 'admin123@gmail.com' && senha === 'Admin123') {
      setEmail('');
      setSenha('');
      navigation.navigate('Tela02', { usuarioEmail: email });
    } else {
      Alert.alert(
        'Acesso Negado', 
        'E-mail ou senha incorretos.\n\nDica: Use admin123@gmail.com / admin'
      );
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <Text style={styles.titulo}>Acessar Perfil</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#A0AEC0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.senhaWrapper}>
            <TextInput
              style={styles.inputSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#A0AEC0"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity 
              onPress={() => setMostrarSenha(!mostrarSenha)} 
              style={styles.botaoOlho}
            >
              <Text style={styles.textoOlho}>{mostrarSenha ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.botaoEntrar} activeOpacity={0.8} onPress={handleLogin}>
          <Text style={styles.textoBotaoEntrar}>Entrar na Tela 02</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    padding: 24, // Margens externas confortáveis
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconeLogo: {
    fontSize: 40,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#718096',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#2D3748',
    fontSize: 15,
  },
  senhaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF2F7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  inputSenha: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    color: '#2D3748',
    fontSize: 15,
  },
  botaoOlho: {
    paddingHorizontal: 12,
  },
  textoOlho: {
    fontSize: 18,
  },
  botaoEntrar: {
    width: '100%',
    height: 50,
    backgroundColor: '#3182CE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 12,
    shadowColor: '#3182CE',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  textoBotaoEntrar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});