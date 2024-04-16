import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Trips({ navigation }) {
  const Trips = [
    { id: 1, titulo: 'Cuernavaca-CDMX', subtitulo: 'Fecha: 14/02/2024' },
    { id: 2, titulo: 'Cuernavaca-CDMX', subtitulo: 'Fecha: 14/02/2024' },
    { id: 3, titulo: 'Cuernavaca-CDMX', subtitulo: 'Fecha: 14/02/2024' },
  ];

  const formatoHora = (hora) => {
    const partesHora = hora.split(':');
    const horas = parseInt(partesHora[0]); // Convertir a número entero
    const minutos = partesHora[1];
    const ampm = horas >= 12 ? 'pm' : 'am'; // Determinar si es AM o PM
    const hora12 = horas % 12 || 12; // Convertir a formato de 12 horas

    return `${hora12}:${minutos} ${ampm}`;
  };

  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          const id = userData.user.id_user;

          const response = await axios.get(`http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/tickets/user/${id}`);

          setTripsData(response.data.data);

          console.log(tripsData);
        } else {
          console.log('No se encontraron datos del usuario');
        }
      } catch (error) {
        console.log('Error al obtener los datos:', error);
      }
    }

    fetchTickets();

    const unsubscribe = navigation.addListener('focus', () => {
      fetchTickets();
    });

    return unsubscribe;

  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mis viajes</Text>
      <ScrollView>
        {tripsData.map((trip, index) => (
          <View key={index} style={styles.tarjeta}>
            <Text style={styles.tituloViaje}>{trip.viaje.origen + ' - ' + trip.viaje.destino}</Text>
            <Text style={styles.subtituloViaje}>{'Salida: ' + formatoHora(trip.viaje.horaSalida)}</Text>
            <Text style={styles.subtituloViaje}>{'Llegada: ' + formatoHora(trip.viaje.horaLlegada)}</Text>
            <Text style={styles.subtituloViaje}>{'Asiento: ' + trip.asiento}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tarjeta: {
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#dee2e6'
  },
  tituloViaje: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  subtituloViaje: {
    fontSize: 16,
    marginTop: 5,
  },

})