import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Nombre completo" style={styles.input} />
        <TextInput placeholder="Fecha de nacimiento" style={styles.input} />
        <TextInput placeholder="Correo electrónico" style={styles.input} />
        <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.input} />
        <TextInput placeholder="Confirmar contraseña" secureTextEntry={true} style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Text style={styles.haveAccount}>¿Ya tienes una cuenta?</Text>
    </View>
  );
}
//hola
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'red',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
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
  haveAccount: {
    marginTop: 20,
    fontSize: 16,
  },
};

export default Register;
