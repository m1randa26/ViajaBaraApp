import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'; // Importa TouchableOpacity

export default function Home({ navigation }) { // Asegúrate de pasar 'navigation' como una prop

  const usuario = {
    nombre: 'Enrique Copado',
    fotoPerfilURL: '',
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

  // Función para manejar la navegación a la pantalla de detalles del viaje
  const navigateToDetallesViaje = () => {
    navigation.navigate('DetallesViaje');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.perfilContainer}>
          <Image source={{ uri: usuario.fotoPerfilURL }} style={styles.fotoPerfil} />
          <View>
            <Text style={styles.nombreUsuario}>{usuario.nombre}</Text>
          </View>
        </View>
        <Text style={styles.proximoViajeTitulo}>{proximoViaje.titulo}</Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardTituloContainer}>
            <Text style={styles.cardTitulo}>{proximoViaje.destino}</Text>
            {proximoViaje.pagado && <View style={styles.circuloVerde}></View>}
          </View>
          <Text style={styles.subtitulo}>{proximoViaje.subtitulo}</Text>
          <Text style={styles.subtitulo}>{proximoViaje.subtitulo2}</Text>
        </View>

        {/* Nuevo componente para mostrar los viajes */}
        <View style={styles.viajesContainer}>
          <Text style={styles.viajesTitulo}>Viajes</Text>
          {viajes.map((viaje, index) => (
            <TouchableOpacity key={index} style={styles.cardContainer} onPress={navigateToDetallesViaje}>
              <Text style={styles.cardTitulo2}>{viaje.titulo}</Text>
              <Text style={styles.cardSubtitulo}>{viaje.subtitulo}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  perfilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  proximoViajeTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    // Propiedades de sombreado específicas de iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    // Propiedad de elevación específica de Android
    elevation: 4,
  },
  cardTituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: 'red',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardSubtitulo: {
    fontSize: 12,
    marginTop: 5,
  },
  cardTitulo2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  scrollView: {
    flex: 1,
  },
});
