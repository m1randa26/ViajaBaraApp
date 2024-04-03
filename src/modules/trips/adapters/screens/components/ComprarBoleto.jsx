import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacity } from 'react-native'
import React, { useState }, { useState } from 'react'

const ComprarBoleto = () => {

  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatPress = (seatNumber) => {
    if (selectedSeat === seatNumber) {
      // Si el asiento ya está seleccionado, volver al estado normal
      setSelectedSeat(null);
    } else {
      // Si el asiento no está seleccionado, marcarlo como seleccionado
      setSelectedSeat(seatNumber);
    }
  }

  const isButtonDisabled = selectedSeat === null;

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };

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
          <TouchableOpacity onPress={() => handleSeatPress(1)} style={[styles.seat, selectedSeat === 1 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(5)} style={[styles.seat, selectedSeat === 5 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(9)} style={[styles.seat, selectedSeat === 9 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(13)} style={[styles.seat, selectedSeat === 13 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>13</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(17)} style={[styles.seat, selectedSeat === 17 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>17</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>B</Text>
          <TouchableOpacity onPress={() => handleSeatPress(2)} style={[styles.seat, selectedSeat === 2 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(6)} style={[styles.seat, selectedSeat === 6 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(10)} style={[styles.seat, selectedSeat === 10 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(14)} style={[styles.seat, selectedSeat === 14 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>14</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(18)} style={[styles.seat, selectedSeat === 18 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>18</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>

        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>C</Text>
          <TouchableOpacity onPress={() => handleSeatPress(3)} style={[styles.seat, selectedSeat === 3 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(7)} style={[styles.seat, selectedSeat === 7 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(11)} style={[styles.seat, selectedSeat === 11 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>11</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(15)} style={[styles.seat, selectedSeat === 15 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>15</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(19)} style={[styles.seat, selectedSeat === 19 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>19</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>D</Text>
          <TouchableOpacity onPress={() => handleSeatPress(4)} style={[styles.seat, selectedSeat === 4 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(8)} style={[styles.seat, selectedSeat === 8 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(12)} style={[styles.seat, selectedSeat === 12 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(16)} style={[styles.seat, selectedSeat === 16 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>16</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(20)} style={[styles.seat, selectedSeat === 20 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>20</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A</Text>
          <TouchableOpacity onPress={() => handleSeatPress(1)} style={[styles.seat, selectedSeat === 1 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(5)} style={[styles.seat, selectedSeat === 5 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(9)} style={[styles.seat, selectedSeat === 9 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(13)} style={[styles.seat, selectedSeat === 13 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>13</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(17)} style={[styles.seat, selectedSeat === 17 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>17</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>B</Text>
          <TouchableOpacity onPress={() => handleSeatPress(2)} style={[styles.seat, selectedSeat === 2 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(6)} style={[styles.seat, selectedSeat === 6 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(10)} style={[styles.seat, selectedSeat === 10 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(14)} style={[styles.seat, selectedSeat === 14 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>14</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(18)} style={[styles.seat, selectedSeat === 18 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>18</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>

        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>C</Text>
          <TouchableOpacity onPress={() => handleSeatPress(3)} style={[styles.seat, selectedSeat === 3 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(7)} style={[styles.seat, selectedSeat === 7 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(11)} style={[styles.seat, selectedSeat === 11 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>11</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(15)} style={[styles.seat, selectedSeat === 15 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>15</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(19)} style={[styles.seat, selectedSeat === 19 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>19</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>D</Text>
          <TouchableOpacity onPress={() => handleSeatPress(4)} style={[styles.seat, selectedSeat === 4 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(8)} style={[styles.seat, selectedSeat === 8 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(12)} style={[styles.seat, selectedSeat === 12 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>12</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(16)} style={[styles.seat, selectedSeat === 16 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>16</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSeatPress(20)} style={[styles.seat, selectedSeat === 20 && styles.selectedSeat]}>
            <Text style={styles.seatNumber}>20</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleButtonPress}
        style={[styles.boton, isButtonDisabled && styles.disabledButton]}
        disabled={isButtonDisabled}
      >
        <Text
          style={[styles.textoBoton, isButtonDisabled && styles.disabledText]}
        >Comprar boleto
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleButtonPress}
        style={[styles.boton, isButtonDisabled && styles.disabledButton]}
        disabled={isButtonDisabled}
      >
        <Text
          style={[styles.textoBoton, isButtonDisabled && styles.disabledText]}
        >Comprar boleto
        </Text>
      </TouchableOpacity>

      
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center'
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
    height: '65%',
    height: '65%',
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
    backgroundColor: '#5E5E5E',
    justifyContent: 'center',
    alignItems: 'center'
    alignItems: 'center'
  },
  seat: {
    width: 40,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#5E5E5E',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  selectedSeat: {
    backgroundColor: '#37CA60', // Cambia el color cuando el asiento está seleccionado
  },
  seatNumber: {
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  selectedSeat: {
    backgroundColor: '#37CA60', // Cambia el color cuando el asiento está seleccionado
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
    color: 'gray'
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
    color: 'gray'
  }
})