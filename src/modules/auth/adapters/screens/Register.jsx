import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/user/registro/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          role: {
            id_role: 3,
            nombre: 'CLIENT_ROLE'
          }
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Éxito', 'Usuario registrado correctamente', [
          {
            text: 'Iniciar sesión',
            onPress: () => navigation.navigate('Auth'),
          },
        ]);
      } else {
        Alert.alert('Error', data.message || 'Hubo un problema al registrar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Hubo un problema al conectar con el servidor');
    }
  };

  const NavigateToAuth = () => {
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '80%', justifyContent: 'flex-start' }}>
        <Text style={styles.title}>Crea una cuenta</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nombre completo"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Correo electrónico"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Número de teléfono"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#3DD7FD" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirmar contraseña"
            secureTextEntry={!showConfirmPassword}
            style={styles.passwordInput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? 'eye' : 'eye-off'} size={24} color="#3DD7FD" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={NavigateToAuth}>
        <Text style={styles.loginText}>
          <Text style={{ color: '#1E1E1E' }}>¿Ya tienes cuenta? </Text>
          <Text style={{ fontWeight: 'bold' }}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    marginLeft: -30,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#3DD7FD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  loginText: {
    marginTop: 20,
    color: '#3DD7FD',
    fontSize: 16,
  },
};

export default Register;
