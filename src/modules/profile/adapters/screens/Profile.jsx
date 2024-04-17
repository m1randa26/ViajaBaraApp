import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Avatar } from '@rneui/themed';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = useCallback(async () => {
    try {
      const userStorageData = await AsyncStorage.getItem('userData');
      if (userStorageData) {
        const userData = JSON.parse(userStorageData);
        const loggedInUser = userData.user;
        setUserData(loggedInUser);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData, isFocused]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      setUserData(null);
      Alert.alert('Éxito', 'Sesión cerrada correctamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      Alert.alert('Error', 'Hubo un problema al cerrar sesión');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Auth');
  };

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
            <Text style={styles.nameTitle}>{userData?.name}</Text>
            <Text style={styles.text}>{userData?.phone}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.halfScreen, styles.cardInfo]}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Email:</Text>
          <Text style={{ fontSize: 16, color: '#5E5E5E' }}>{userData?.email}</Text>
        </View>
        {userData ? (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logoutButton}>Cerrar sesión</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginButton}>Iniciar sesión</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  nameTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase'
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
  logoutButton: {
    marginTop: 16,
    color: '#3DD7FD',
    fontSize: 20,
  },
  loginButton: {
    marginTop: 16,
    color: '#3DD7FD',
    fontSize: 20,
  },
});

export default Profile;