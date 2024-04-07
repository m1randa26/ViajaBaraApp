import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Auth = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Si la autenticación es exitosa, navegar al componente Home
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Correo electrónico o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Hubo un problema al iniciar sesión');
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '80%', justifyContent: 'flex-start' }}>
        <Text style={styles.title}>Bienvenido</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.createAccountText}>
          <Text style={{ color: '#1E1E1E' }}>¿No tienes cuenta? </Text>
          <Text style={{ fontWeight: 'bold', color: '#3DD7FD' }}>Crea una</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: 'red',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#3DD7FD',
    borderRadius: 5,
    marginTop: 24,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },
  createAccountText: {
    marginTop: 32,
    fontSize: 16,
    color: '#3DD7FD',
  },
  forgotPasswordContainer: {
    marginTop: 24,
  },
  forgotPassword: {
    fontSize: 16,
    color: '#1E1E1E',
    textDecorationLine: 'underline',
  },
});

export default Auth;