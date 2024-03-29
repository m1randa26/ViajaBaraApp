import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity} from 'react-native';

export default function HomeCon({ navigation }) {

  const conductor = {
    nombre: 'Juan Pérez',
    fotoPerfilURL: 'https://via.placeholder.com/500x300',
  };

  const proximoViaje = {
    titulo: 'Próximo Viaje',
    destino: 'Cuernavaca - Ciudad de México  ',
    enCurso: true,
    subtitulo: 'Salida: 12:00 pm              Asiento:A14',
    subtitulo2: 'Llegada: 1:30 pm             Autobús:Van-114',
  };

  const navigateToDetallesViajeCon = () => {
    navigation.navigate('DetallesViajeCon');
  };

  return (
    <View style={styles.container}>
      <View style={styles.perfilContainer}>
        <Text style={styles.nombreUsuario}>Bienvenido {conductor.nombre}</Text>
      </View>

      <Text style={styles.proximoViajeTitulo}>{proximoViaje.titulo}</Text>
      <TouchableOpacity onPress={navigateToDetallesViajeCon}>
        <View style={styles.cardContainer}>
          <View style={styles.cardTituloContainer}>
            <Text style={styles.cardTitulo}>{proximoViaje.destino}</Text>
            {proximoViaje.enCurso && <View style={styles.circuloVerde}></View>}
          </View>
          <Text style={styles.subtitulo}>{proximoViaje.subtitulo}</Text>
          <Text style={styles.subtitulo}>{proximoViaje.subtitulo2}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  perfilContainer: {
    marginBottom: 20,
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  proximoViajeTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitulo: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
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
});
