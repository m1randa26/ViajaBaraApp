import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ComprarBoleto = ({ route, navigation }) => {

  const { ticketCount, idViaje } = route.params;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatData, setSeatData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  const checkDisponibilidad = (data) => {
    if (data.every((item) => item.disponible === false)) {
      setModalVisible3(true);

      setTimeout(() => {
        navigation.pop();
      }, 2000);
    }
  };

  useEffect(() => {

    const fetchSeats = async () => {
      try {
        const response = await axios.get(`http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/tickets/viaje/${idViaje}`);
        const data = response.data.data.map(ticket => ({
          idTicket: ticket.idTicket,
          disponible: ticket.disponible,
          asiento: ticket.asiento
        }));

        setSeatData(data);

        checkDisponibilidad(data);

      } catch (error) {
        console.log('Error al obtener los datos: ', error);
      }
    }

    fetchSeats();

  }, []);

  const handleSeatPress = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Si el asiento ya está seleccionado, quitarlo de la lista de asientos seleccionados
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else if (selectedSeats.length < ticketCount) {
      // Si aún no se han seleccionado suficientes asientos, agregar el asiento a la lista de asientos seleccionados
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Asientos seleccionados',
        text2: 'Ya no puedes seleccionar más asientos',
        visibilityTime: 2000
      });
    }
  }

  const isButtonDisabled = selectedSeats.length !== ticketCount || selectedSeats.length === 0;


  const handleButtonPress = () => {
    // console.log('Botón presionado');
    // console.log('Asientos seleccionados:', selectedSeats);
    setModalVisible(true);
  };

  const cancelarCompra = () => {
    setModalVisible(false);
  }

  const confirmarCompra = async () => {

    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const idUsuario = userData.user.id_user;

        const data = {
          idUsuario: idUsuario,
          asientos: selectedSeats,
          idViaje: idViaje
        }

        const response = await axios.post('http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/tickets/buy', data);

        if (response.status === 200) {
          setModalVisible(false);
          setModalVisible2(true);
        } else {
          console.log('Error en la compra');
        }

      } else {
        console.log("No se encontró datos del usuario");
      }
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }

  };

  const accept = () => {
    setModalVisible2(false);
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona tu asiento</Text>
      <View style={styles.status}>
        <View style={styles.statusContainer}>
          <View style={[styles.square, { backgroundColor: '#88ECA4' }]}></View>
          <Text>Disponible</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={[styles.square, { backgroundColor: '#5E5E5E' }]}></View>
          <Text>Ocupado</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={[styles.square, { backgroundColor: '#37CA60' }]}></View>
          <Text>Seleccionado</Text>
        </View>
      </View>

      <View style={styles.bus}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A</Text>
          {seatData.slice(0, 5).map((seat) => (
            <TouchableOpacity
              key={seat.idTicket}
              onPress={() => handleSeatPress(seat.asiento)}
              style={[
                styles.seat,
                selectedSeats.includes(seat.idTicket) && styles.selectedSeat,
                !seat.disponible && styles.disabledSeat,
              ]}
              disabled={!seat.disponible}
            >
              <Text style={styles.seatNumber}>{seat.asiento}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>B</Text>
          {seatData.slice(5, 10).map((seat) => (
            <TouchableOpacity
              key={seat.idTicket}
              onPress={() => handleSeatPress(seat.asiento)}
              style={[
                styles.seat,
                selectedSeats.includes(seat.idTicket) && styles.selectedSeat,
                !seat.disponible && styles.disabledSeat,
              ]}
              disabled={!seat.disponible}
            >
              <Text style={styles.seatNumber}>{seat.asiento}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>

        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>C</Text>
          {seatData.slice(10, 15).map((seat) => (
            <TouchableOpacity
              key={seat.idTicket}
              onPress={() => handleSeatPress(seat.asiento)}
              style={[
                styles.seat,
                selectedSeats.includes(seat.idTicket) && styles.selectedSeat,
                !seat.disponible && styles.disabledSeat,
              ]}
              disabled={!seat.disponible}
            >
              <Text style={styles.seatNumber}>{seat.asiento}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>D</Text>
          {seatData.slice(15, 20).map((seat) => (
            <TouchableOpacity
              key={seat.idTicket}
              onPress={() => handleSeatPress(seat.asiento)}
              style={[
                styles.seat,
                selectedSeats.includes(seat.idTicket) && styles.selectedSeat,
                !seat.disponible && styles.disabledSeat,
              ]}
              disabled={!seat.disponible}
            >
              <Text style={styles.seatNumber}>{seat.asiento}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={handleButtonPress}
        style={[styles.boton, isButtonDisabled && styles.disabledButton]}
        disabled={isButtonDisabled}
      >
        <Text
          style={[styles.textoBoton, isButtonDisabled && styles.disabledText]}
        >Comprar {ticketCount} boleto(s)
        </Text>
      </TouchableOpacity>
      <Toast />
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
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1E1E1E' }}>Total</Text>
            <Text style={{ fontSize: 24, color: '#FE1300' }}>${85 * ticketCount}</Text>
            <View style={{ width: 220, height: 2, backgroundColor: 'gray', marginTop: 4 }}></View>
            <View style={{ width: 220, justifyContent: 'flex-start', marginTop: 16 }}>
              <Text style={{ fontSize: 16 }}>Boletos: {ticketCount} x $85</Text>
            </View>
            <View style={{ width: 220, flexDirection: 'row', justifyContent: 'space-between', marginTop: 32 }}>
              <TouchableOpacity style={styles.confirmButton} onPress={cancelarCompra}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={confirmarCompra}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.circle}>
              <Image
                source={require('../../../../../../assets/check-img.png')}
                style={styles.img}
              />
            </View>
            <View style={{ width: 250, alignItems: 'center', marginTop: 24 }}>
              <Text style={styles.textSuccess}>¡Compra confirmada!</Text>
              <Text>Hemos enviado un correo con los detalles de tu viaje. Gracias por tu compra.</Text>
              <TouchableOpacity style={styles.successButton} onPress={accept}>
                <Text style={styles.buttonText}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View>
              <Image
                source={require('../../../../../../assets/alert.png')}
                style={styles.img}
              />
            </View>
            <View style={{ width: 250, alignItems: 'center', marginTop: 24 }}>
              <Text style={styles.textWarning}>Viaje no disponible</Text>
              <Text style={styles.textAlert}>Lo sentimos. Ya no hay asientos disponibles para este viaje.</Text>
              <TouchableOpacity style={styles.buttonAlert}>
                <Text style={styles.buttonText}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ComprarBoleto

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24
  },
  img: {
    width: 80,
    height: 80
  },
  textWarning: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#935d19',
    marginBottom: 8
  },
  textAlert: {
    color: '#a37525'
  },
  buttonAlert: {
    width: 120,
    padding: 15,
    borderRadius: 4,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9c000'
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    width: '100%',
    padding: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  square: {
    width: 25,
    height: 25,
    borderRadius: 4,
    marginRight: 8
  },
  bus: {
    width: '70%',
    height: '60%',
    backgroundColor: 'white',
    marginTop: 24,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Esto es solo para Android, se ignora en iOS
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  section: {
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  section: {
    width: '20%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  seat: {
    width: 40,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#88ECA4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  selectedSeat: {
    backgroundColor: '#22B64B', // Cambia el color cuando el asiento está seleccionado
  },
  seatNumber: {
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  seatNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  boton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 32,
    borderColor: '#3DD7FD',
    borderWidth: 2,
  },
  textoBoton: {
    color: '#3DD7FD',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A7A7A7',
    borderColor: 'gray',
  },
  disabledText: {
    color: 'gray',
    fontWeight: 'bold',
    color: 'white'
  },
  boton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 32,
    borderColor: '#3DD7FD',
    borderWidth: 2,
  },
  disabledSeat: {
    backgroundColor: 'gray',
    opacity: 0.5, // Opacidad reducida para indicar que el asiento está deshabilitado
  },
  textoBoton: {
    color: '#3DD7FD',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A7A7A7',
    borderColor: 'gray',
  },
  disabledText: {
    color: 'gray'
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
  confirmButton: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 4,
  },
  closeButton: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white'
  },
  circle: {
    width: 80,
    height: 80,
    backgroundColor: '#20be79',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSuccess: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#20be79',
    marginBottom: 8
  },
  successButton: {
    width: 120,
    padding: 15,
    backgroundColor: '#20be79',
    borderRadius: 4,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
});