import React, { useState } from 'react';
import { StyleSheet,Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SearchBar } from '@rneui/base';

export default function Home({ navigation }) {

  const usuario = {
    nombre: 'Enrique Copado',
    fotoPerfilURL: 'https://via.placeholder.com/500x300',
  };

  const proximoViaje = {
    titulo: 'Próximo Viaje',
    destino: 'Cuernava - CDMX       Pagado',
    pagado: true,
    subtitulo: 'Salida: 12:00 pm              Asiento:A14',
    subtitulo2: 'Llegada: 1:30 pm             Atobus:Van-114',
  };

  const viajes = [
    { titulo: 'Cuernava-CDMX', subtitulo: 'Salida: 12:00PM           Horarios:L M M J V S D' },
    { titulo: 'Cuernava-CDMX', subtitulo: 'Salida: 12:00PM           Horarios:L M M J V S D' },
    { titulo: 'Cuernava-CDMX', subtitulo: 'Salida: 12:00PM           Horarios:L M M J V S D' },
    { titulo: 'Cuernava-CDMX', subtitulo: 'Salida: 12:00PM           Horarios:L M M J V S D' },
  ];

  const navigateToDetallesViaje = () => {
    navigation.navigate('DetallesViaje');
  };

  const navigateToDetallesPoxViaje = () => {
    navigation.navigate('DetallesPoxViaje');
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <View style={styles.busqueda}>
          <Text style={styles.nombreUsuario}>Bienvenido Enrique</Text>
          <View style={styles.containerSearch}>
            <View style={[styles.input, style = { marginRight: 8 }]}>
              <SearchBar style={{ fontSize: 14 }}
                platform='android'
                placeholder='Origen'
              />
            </View>
            <View style={styles.input}>
              <SearchBar style={{ fontSize: 14 }}
                platform='android'
                placeholder='Destino'
              />
            </View>
          </View>
        </View>

        <Text style={styles.proximoViajeTitulo}>{proximoViaje.titulo}</Text>
        <TouchableOpacity onPress={navigateToDetallesPoxViaje}>
        <View style={[styles.cardContainer, style = { marginBottom: 24 }]}>
          <View style={styles.cardTituloContainer}>
            <Text style={styles.cardTitulo}>{proximoViaje.destino}</Text>
            {proximoViaje.pagado && <View style={styles.circuloVerde}></View>}
          </View>
          <Text style={styles.subtitulo}>{proximoViaje.subtitulo}</Text>
          <Text style={styles.subtitulo}>{proximoViaje.subtitulo2}</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundCard}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.viajesContainer}>
            <Text style={styles.viajesTitulo}>Viajes</Text>
            {viajes.map((viaje, index) => (
              <TouchableOpacity key={index} style={[styles.cardContainer, styles.cardViajes]} onPress={navigateToDetallesViaje}>
                <Text style={styles.cardTitulo}>Cuernavaca - CDMX</Text>
                <Text style={styles.cardSubtitulo}>
                  <Text style={{ fontWeight: 'bold' }}>Salida:</Text> 8:00 am
                </Text>
                <Text style={styles.cardSubtitulo}>
                  <Text style={{ fontWeight: 'bold' }}>Llegada:</Text> 9:30 am
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSearch: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  busqueda: {
    marginBottom: 32,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nombreUsuario: {
    fontSize: 24,
  },
  proximoViajeTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardContainer: {
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginTop: 24,
    // Propiedades de sombreado específicas de iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Propiedad de elevación específica de Android
    elevation: 4,
  },
  cardViajes: {
  },
  cardTituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitulo: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  circuloVerde: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginLeft: 10,
  },
  subtitulo: {
    fontSize: 14,
    marginTop: 10,
  },
  viajesContainer: {
    marginTop: 20,
  },
  viajesTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardSubtitulo: {
    fontSize: 16,
    marginTop: 5,
  },
  cardTitulo2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  scrollView: {
    paddingHorizontal: 8,
  },
  backgroundCard: {
    flex: 1,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 12
  },
  perfilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nombreUsuario: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundCard: {
    flex: 1,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 12
  }
});
