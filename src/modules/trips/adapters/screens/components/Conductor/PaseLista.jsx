import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function PassengerList({ navigation}) {

  const navigateToDetallesViajeCon = () => {
    navigation.navigate('DetallesViajeCon');
  };

  const [passengers, setPassengers] = useState([
    { name: 'Juan', isChecked: false, isCrossed: false },
    { name: 'María', isChecked: false, isCrossed: false },
  ]);

  const handleCheck = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index].isChecked = !updatedPassengers[index].isChecked;
    updatedPassengers[index].isCrossed = false; // Desactiva el otro estado
    setPassengers(updatedPassengers);
  };

  const handleCross = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index].isCrossed = !updatedPassengers[index].isCrossed;
    updatedPassengers[index].isChecked = false; // Desactiva el otro estado
    setPassengers(updatedPassengers);
  };

  return (
    <View style={styles.container}>
      {passengers.map((passenger, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.passengerName}>{passenger.name}</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => handleCheck(index)}>
              <AntDesign name={passenger.isChecked ? 'checkcircle' : 'checkcircleo'} size={24} color={passenger.isChecked ? 'green' : 'gray'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCross(index)}>
              <AntDesign name={passenger.isCrossed ? 'closecircle' : 'closecircleo'} size={24} color={passenger.isCrossed ? 'red' : 'gray'} />
            </TouchableOpacity>
          </View>
        </View>
      ))}

        <TouchableOpacity style={styles.botonListo} onPress={navigateToDetallesViajeCon}>
          <Text style={styles.textoBotonListo}>Listo</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  passengerName: {
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  botonListo: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    borderColor: '#3DD7FD',
    borderWidth: 2,
  },
  textoBotonListo: {
    color: '#3DD7FD',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
