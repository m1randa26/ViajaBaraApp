import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComprarBoleto = () => {
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
        <Text style={styles.section}>A</Text>
        <Text style={styles.section}>B</Text>
        <Text style={styles.section}>C</Text>
        <Text style={styles.section}>D</Text>
      </View>
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
    height: '70%',
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
    justifyContent: 'space-around',
    padding: 16
  },
  section: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})