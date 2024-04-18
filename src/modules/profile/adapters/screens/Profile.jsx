import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
  Alert, Modal, TextInput, Button
} from 'react-native';
import { Avatar } from '@rneui/themed';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Profile = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [user, setUser] = useState(null);
  const [dataLive, setDataLive] = useState(null);

  const fetchUserData = useCallback(async () => {
    try {
      const userStorageData = await AsyncStorage.getItem('userData');
      if (userStorageData) {
        const userData = JSON.parse(userStorageData);
        const loggedInUser = userData.user;
        setUserData(loggedInUser);
      }
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData, isFocused]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');

      navigation.navigate('AuthStack');
      Alert.alert('Éxito', 'Sesión cerrada correctamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      Alert.alert('Error', 'Hubo un problema al cerrar sesión');
    }
  };

  const handleLogin = () => {
    navigation.navigate('AuthStack');
  };

  const handleEdit = () => {
    setInput1(userData.name);
    setInput2(userData.email);
    setInput3(userData.phone);
    setModalVisible(true);
  }

  const saveUserData = async () => {
    try {
      const idUser = userData.id_user;

      if (!input1 || !input2 || !input3) {
        Alert.alert('Campos requeridos', 'Por favor completa todos los campos.');
        return; // Detener la ejecución si hay campos vacíos
      }

      const updatedUser = {
        id_user: idUser,
        name: input1,
        email: input2,
        phone: input3,
      };

      const response = await axios.put(`http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/user/${idUser}`, updatedUser);

      if (response.status === 200) {
        setUser(updatedUser);
        Alert.alert('Información guardada', 'Los cambios se realizaron correctamente.')
        setModalVisible(false);
      } else {
        console.log('ERROR');
      }
    } catch (error) {
      console.log('Error al editar la informacion: ', error);
    }
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
        <TouchableOpacity onPress={handleEdit}>
          <Text style={styles.editProfile}>Editar información</Text>
        </TouchableOpacity>
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

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 24 }}>Editar información</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={input1}
              onChangeText={setInput1}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={input2}
              onChangeText={setInput2}
            />
            <TextInput
              style={styles.input}
              placeholder="Número"
              value={input3}
              onChangeText={setInput3}
            />
            <Button title="Guardar" onPress={saveUserData} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
  editProfile: {
    marginTop: 32,
    color: '#3DD7FD',
    fontSize: 20,
  },
  loginButton: {
    marginTop: 16,
    color: '#3DD7FD',
    fontSize: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },
  input: {
    height: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Profile;