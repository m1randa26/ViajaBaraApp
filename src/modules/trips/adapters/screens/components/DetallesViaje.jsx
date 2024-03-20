import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

export default function DetallesViaje() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/500x300' }}
        style={styles.imagen}
      />
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Ciudad de México</Text>
        <Text style={styles.descripcion}>
        La Ciudad de México es uno de los destinos  más ricos y fascinantes del mundo, no solo por ser una de las tres  principales ciudades con el mayor número de museos.
        </Text>
        <Text style={styles.subtitulo}>Información del viaje</Text>
        <View style={styles.lista}>
          <Text style={styles.listaItem}>Origen: Cuernavaca </Text>
          <Text style={styles.listaItem}>Destino: Ciudad de Mexico</Text>
          <Text style={styles.listaItem}>Salida: 12:00 PM</Text>
          <Text style={styles.listaItem}>Llegada: 1:30pm</Text>
          <Text style={styles.listaItem}>Asiento: A14</Text>
          <Text style={styles.listaItem}>Autobús: Van-114</Text>
        </View>
        <Text style={styles.subtitulo}>Escalas del autobús</Text>
        <View style={styles.lista}>
          <View style={styles.itemLista}>
            <View style={styles.circulo}></View>
            <Text style={styles.textoLista}>Paloma de la paz</Text>
          </View>
          <View style={styles.itemLista}>
            <View style={styles.circulo}></View>
            <Text style={styles.textoLista}>Walmart domingo diez</Text>
          </View>
          {/* Agrega más elementos de lista según sea necesario */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagen: {
    width: '100%',
    height: 200,
  },
  contenido: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
    color: 'red', 
  },
  lista: {
    marginLeft: 20,
  },
  listaItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  circulo: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black', // Color del círculo
    marginRight: 10, // Espacio entre el círculo y el texto
  },
  textoLista: {
    fontSize: 16,
  },
});
