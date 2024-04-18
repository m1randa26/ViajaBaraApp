import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeCon({ navigation }) {
  const [viajesData, setViajesData] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userStorageData = await AsyncStorage.getItem('userData');
        if (userStorageData) {
          const userData = JSON.parse(userStorageData);
          const id = userData.user.id_user;
          setUsername(userData.user.name);
          const response = await axios.get(`http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/viaje/conductor/${id}`); // Mandar el id del conductor que inicio sesion
          setViajesData(response.data.data);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llama a la función para realizar la solicitud cuando el componente se monte
  }, []);

  const navigateToDetallesViajeCon = (viaje) => {
    navigation.navigate('DetallesViajeCon', { viaje });
  };

  const formatoHora = (hora) => {
    const partesHora = hora.split(':');
    const horas = parseInt(partesHora[0]); // Convertir a número entero
    const minutos = partesHora[1];
    const ampm = horas >= 12 ? 'pm' : 'am'; // Determinar si es AM o PM
    const hora12 = horas % 12 || 12; // Convertir a formato de 12 horas

    return `${hora12}:${minutos} ${ampm}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.perfilContainer}>
        <Text style={styles.nombreUsuario}>Bienvenido {username} </Text>
      </View>

      <Text style={styles.proximoViajeTitulo}>Próximos Viajes</Text>

      {viajesData.map((viaje, index) => (
        <TouchableOpacity key={index} onPress={() => navigateToDetallesViajeCon(viaje)}>
          <View style={styles.cardContainer}>
            <Image style={styles.imagenDestino} source={{ uri: viaje.imagenDestino }} />
            <Text style={styles.cardTitulo}>{viaje.origen} - {viaje.destino}</Text>
            <Text style={styles.subtitulo}>Hora de salida: {formatoHora(viaje.horaSalida)}</Text>
            <Text style={styles.subtitulo}>Hora de llegada: {formatoHora(viaje.horaLlegada)}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  perfilContainer: {
    marginBottom: 20,
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  proximoViajeTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  imagenDestino: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 14,
    marginBottom: 5,
  },
});