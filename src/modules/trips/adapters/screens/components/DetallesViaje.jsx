import {
  StyleSheet, Text, View, Image,
  ScrollView, TouchableOpacity, Modal, ToastAndroid
} from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Toast, { ErrorToast } from 'react-native-toast-message';

export default function DetallesViaje({ navigation, route }) {

  const { viaje } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);

  const toastConfig = {
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17
        }}
        text2Style={{
          fontSize: 13
        }}
      />
    )
  };

  const handleButtonPress = () => {
    setModalVisible(true);
  }

  const handleIncrement = () => {
    if (ticketCount < 20) { // Limita el conteo máximo a 3 boletos
      setTicketCount(ticketCount + 1);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Límite de boletos',
        text2: 'Se ha alcanzado el límite de boletos'
      });
    }
  };

  const formatoHora = (hora) => {
    const partesHora = hora.split(':');
    const horas = parseInt(partesHora[0]); // Convertir a número entero
    const minutos = partesHora[1];
    const ampm = horas >= 12 ? 'pm' : 'am'; // Determinar si es AM o PM
    const hora12 = horas % 12 || 12; // Convertir a formato de 12 horas

    return `${hora12}:${minutos} ${ampm}`;
  };

  const handleDecrement = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handleContinue = () => {
    console.log(`Continuar a otra pantalla con ${ticketCount} boletos`);
    setModalVisible(false);
    const idViaje = viaje.idViaje;
    navigation.navigate('ComprarBoleto', { ticketCount, idViaje });
    // navigation.navigate('OtraPantalla', { ticketCount });
    // Asegúrate de tener acceso a la navegación, ya sea a través de props o mediante el uso de useNavigation hook
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: viaje.imagenDestino }}
        style={styles.imagen}
      />
      <View style={styles.contenido}>
        <Text style={styles.titulo}>{viaje.destino}</Text>
        <Text style={styles.descripcion}>
          {viaje.descripcionDestino}
        </Text>
        <View style={styles.contenedorTitulo}>
          <Text style={styles.subtitulo}>Información del viaje</Text>
          <View style={styles.lineaHorizontal}></View>
        </View>
        <View style={styles.lista}>
          <Text style={styles.listaItem}>
            <Text style={{ fontWeight: 'bold' }}>Origen:</Text> {viaje.origen}
          </Text>
          <Text style={styles.listaItem}>
            <Text style={{ fontWeight: 'bold' }}>Destino:</Text> {viaje.destino}
          </Text>
          <Text style={styles.listaItem}>
            <Text style={{ fontWeight: 'bold' }}>Salida:</Text> {formatoHora(viaje.horaSalida)}
          </Text>
          <Text style={styles.listaItem}>
            <Text style={{ fontWeight: 'bold' }}>Llegada:</Text> {formatoHora(viaje.horaLlegada)}
          </Text>
          <Text style={styles.listaItem}>
            <Text style={{ fontWeight: 'bold' }}>Horarios:</Text> {viaje.horarios}
          </Text>
        </View>
        {/*
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
        */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: viaje.latitudDestino,
            longitude: viaje.longitudDestino,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: viaje.latitudDestino, longitude: viaje.longitudDestino }}
            title={viaje.destino}
            description="Destino del viaje"
          />
        </MapView>

        <TouchableOpacity style={styles.boton} onPress={handleButtonPress}>
          <Text style={styles.textoBoton}>Adquirir boleto</Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 16, marginBottom: 16 }}>Cantidad de boletos:</Text>
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={handleDecrement} style={styles.counterButton}>
                  <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.ticketCount}>{ticketCount}</Text>
                <TouchableOpacity onPress={handleIncrement} style={styles.counterButton}>
                  <Text style={styles.counterButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.button, styles.closeButton]}>
                  <Text style={styles.buttonText}>Cerrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleContinue} style={[styles.button, styles.continueButton]}>
                  <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Toast config={toastConfig} />
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
    fontSize: 16,
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
  listaItem: {
    fontSize: 16
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
  lineaVertical2: {

  },
  boton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    borderColor: '#3DD7FD',
    borderWidth: 2,
  },
  textoBoton: {
    color: '#3DD7FD',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro para el modal
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  counterButtonText: {
    color: 'white',
    fontSize: 20,
  },
  ticketCount: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  continueButton: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 4,
  },
  closeButton: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
    marginRight: 10,
  },
  buttonText: {
    color: 'white'
  }
});
