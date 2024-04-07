import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realizar la solicitud al backend para obtener los detalles del usuario
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://192.168.0.178:8080/api/user/1');
      const data = await response.json();
      setUserData(data); // Establecer los datos del usuario en el estado
      setLoading(false); // Cambiar el estado de carga a falso
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      setLoading(false); // Cambiar el estado de carga a falso en caso de error
    }
  };

  const handleLogin = () => {
    navigation.navigate('Auth');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FE1300" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.halfScreen, styles.info]}>
        <View style={{ marginTop: 42, alignItems: 'center' }}>
          <Avatar
            size={120}
            rounded
            source={{ uri: userData?.avatar || 'https://cdn.pixabay.com/photo/2021/06/04/10/29/guy-6309462_1280.jpg' }}
            title={userData?.name || "Bj"}
            containerStyle={{ backgroundColor: 'grey' }}
          >
            <Avatar.Accessory size={40} />
          </Avatar>

          <View style={{ marginTop: 24, alignItems: 'center' }}>
            <Text style={styles.text}>{userData?.name}</Text>
            <Text style={styles.text}>{userData?.phone}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.halfScreen, styles.cardInfo]}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Email:</Text>
          <Text style={{ fontSize: 16, color: '#5E5E5E' }}>{userData?.email}</Text>
        </View>
        {/* Agregar más detalles del usuario aquí si es necesario */}
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginButton}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FE1300'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE1300'
  },
  halfScreen: {
    flex: 0.5
  },
  info: {
    backgroundColor: '#FE1300',
    alignItems: 'center'
  },
  cardInfo: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
    color: '#fff'
  },
  textContainer: {
    width: '80%',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between'
  },
  loginButton: {
    marginTop: 32,
    color: '#3DD7FD',
    fontSize: 20,
  },
});
