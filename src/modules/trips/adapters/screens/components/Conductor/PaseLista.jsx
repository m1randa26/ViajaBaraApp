import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

export default function PassengerList({ navigation, route }) {
  const [pasajeros, setPasajeros] = useState([]);
  const [checkedStatus, setCheckedStatus] = useState({});

  const { viaje } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/tickets/lista/${viaje.idViaje}`);
        const data = response.data.data.map(pasajero => ({ ...pasajero, isChecked: false }));
        setPasajeros(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updatedCheckedStatus = {};
    pasajeros.forEach(pasajero => {
      updatedCheckedStatus[pasajero.idTicket] = pasajero.isChecked;
    });
    console.log(updatedCheckedStatus);
    setCheckedStatus(updatedCheckedStatus);
  }, [pasajeros]);

  const handleCheck = (index) => {
    const updatedPasajeros = [...pasajeros];
    updatedPasajeros[index].isChecked = !updatedPasajeros[index].isChecked;
    setPasajeros(updatedPasajeros);

    // Update checkedStatus
    const ticketId = updatedPasajeros[index].idTicket;
    setCheckedStatus(prevStatus => ({
      ...prevStatus,
      [ticketId]: !prevStatus[ticketId] // Invertir el estado del ticket
    }));
  };

  const navigateToDetallesViajeCon = () => {
    //navigation.navigate('DetallesViajeCon', { pasajeros });
    navigation.pop(2);
  };

  return (
    <ScrollView style={styles.container}>
      {pasajeros.map((pasajero, index) => (
        <TouchableOpacity key={index} onPress={() => handleCheck(index)}>
          <View style={styles.card}>
            <View style={styles.passengerInfo}>
              <Text style={styles.passengerName}>{pasajero.user.name}</Text>
              <Text style={styles.passengerSeat}>Asiento: {pasajero.asiento}</Text>
            </View>
            <AntDesign
              name={pasajero.isChecked ? 'checkcircle' : 'checkcircleo'}
              size={24}
              color={pasajero.isChecked ? '#3DD7FD' : 'gray'}
            />
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.botonListo} onPress={navigateToDetallesViajeCon}>
        <Text style={styles.textoBotonListo}>Listo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2, // Shadow for iOS
    shadowRadius: 3, // Shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  passengerInfo: {
    flex: 1,
  },
  passengerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  passengerSeat: {
    fontSize: 16,
    color: 'gray',
  },
  botonListo: {
    backgroundColor: '#3DD7FD',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  textoBotonListo: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});