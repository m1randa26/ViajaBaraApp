import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


export default function Trips() {
  const Trips = [
    { id: 1, titulo: 'Cuernavaca-CDMX', subtitulo: 'Fecha: 14/02/2024' },
    { id: 2, titulo: 'Cuernavaca-CDMX', subtitulo: 'Fecha: 14/02/2024' },
    { id: 3, titulo: 'Cuernavaca-CDMX', subtitulo: 'Fecha: 14/02/2024' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Historial de Viajes</Text>
      <ScrollView>
        {Trips.map(viaje => (
          <View key={viaje.id} style={styles.tarjeta}>
            <Text style={styles.tituloViaje}>{viaje.titulo}</Text>
            <Text style={styles.subtituloViaje}>{viaje.subtitulo}</Text>
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
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    // Propiedades para sombras en iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
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