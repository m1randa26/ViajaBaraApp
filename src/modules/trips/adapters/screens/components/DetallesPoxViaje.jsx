import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function DetallesPoxViaje({ navigation }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirm = () => {
    navigation.navigate('Home');
    setShowAlert(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/500x300' }}
        style={styles.imagen}
      />
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Ciudad de México</Text>
        <Text style={styles.descripcion}>
          La Ciudad de México es uno de los destinos más ricos y fascinantes del mundo, no solo por ser una de las tres principales ciudades con el mayor número de museos.
        </Text>
        <View style={styles.contenedorTitulo}>
          <Text style={styles.subtitulo}>Información del viaje</Text>
          <View style={styles.lineaHorizontal}></View>
        </View>
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
            <View style={styles.lineaVertical}></View>
            <Text style={styles.textoLista}>Paloma de la paz</Text>
          </View>
          <View style={styles.itemLista}>
            <View style={styles.circulo}></View>
            <View style={styles.lineaVertical}></View>
            <Text style={styles.textoLista}>Walmart domingo diez</Text>
          </View>
          <View style={styles.itemLista}>
            <View style={styles.circulo}></View>
            <View style={styles.lineaVertical2}></View>
            <Text style={styles.textoLista}>AV. Paseo de la Reforma CDMX</Text>
          </View>
        </View>
       
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 19.4326,
            longitude: -99.1332,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 19.4326, longitude: -99.1332 }}
            title="Ciudad de México"
            description="Destino"
          />
        </MapView>
        <TouchableOpacity style={styles.botonDejar} onPress={() => setShowAlert(true)}>
          <Text style={styles.textoBotonDejar}>Dejar Viaje</Text>
        </TouchableOpacity>

        <Modal
          visible={showAlert}
          transparent
          animationType="fade"
        >
          <View style={styles.modalContainer}>
            <View style={styles.alertContainer}>
              <Text style={styles.alertText}>¿Estás seguro de dejar el viaje?</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.alertButton, { backgroundColor: 'red' }]} onPress={handleConfirm}>
                  <Text style={styles.alertButtonText}>Sí</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.alertButton, { backgroundColor: '#3DD7FD' }]} onPress={() => setShowAlert(false)}>
                  <Text style={styles.alertButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    fontSize: 14,
    marginBottom: 10,
  },
  contenedorTitulo: {
    alignItems: 'center',
    position: 'relative',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 30,
    color: 'red',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 2,
    zIndex: 1,
  },
  lineaHorizontal: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    width: '100%',
    position: 'absolute',
    top: '65%',
  },
  lista: {
    marginLeft: 20,
  },
  itemLista: {
    fontSize: 16,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circulo: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginRight: 10,
  },
  textoLista: {
    fontSize: 16,
  },
  lineaVertical: {
    width: 2,
    height: 75,
    backgroundColor: 'black',
    position: 'absolute',
    top: 6,
    left: 4,
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  botonDejar: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    borderColor: 'red',
    borderWidth: 2,
  },
  textoBotonDejar: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    color: 'red',
  },
  alertButton: {
    padding: 15,
    borderRadius: 10,
    width: 120,
    
  },
  alertButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
``
