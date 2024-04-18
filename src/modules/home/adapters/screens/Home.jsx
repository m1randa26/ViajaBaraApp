import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { SearchBar } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {

  const [viajesData, setViajesData] = useState([]);
  const [searchTextOrigen, setSearchTextOrigen] = useState('');
  const [searchTextDestino, setSearchTextDestino] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [firstTrip, setFirstTrip] = useState(null);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchViajes = async () => {
    try {
      const response = await axios.get('http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/viaje/');
      setViajesData(response.data.data);

      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const id = userData.user.id_user;
        setUsername(userData.user.name);

        //const responseTrip = await axios.get(`http://apivibaa-env.eba-gpupsjpx.us-east-1.elasticbeanstalk.com/api/tickets/user/${id}`);

        /*if (responseTrip && responseTrip.data) {
          setFirstTrip(responseTrip.data);
        }*/

        //console.log(firstTrip);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error al obtener los datos', error);
    }
  };

  const fetchDataOnFocus = () => {
    fetchViajes();
  };

  useEffect(() => {
    fetchViajes();
    const unsubscribeFocus = navigation.addListener('focus', fetchDataOnFocus);

    return () => {
      unsubscribeFocus();
    };
  }, [navigation]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchViajes().finally(() => setRefreshing(false));
  };

  const navigateToDetallesViaje = (viaje) => {
    navigation.navigate('DetallesViaje', { viaje });
  };

  const navigateToDetallesPoxViaje = () => {
    navigation.navigate('DetallesPoxViaje');
  };

  const formatoHora = (hora) => {
    const partesHora = hora.split(':');
    const horas = parseInt(partesHora[0]); // Convertir a número entero
    const minutos = partesHora[1];
    const ampm = horas >= 12 ? 'pm' : 'am'; // Determinar si es AM o PM
    const hora12 = horas % 12 || 12; // Convertir a formato de 12 horas

    return `${hora12}:${minutos} ${ampm}`;
  };

  if (loading) {
    return <ActivityIndicator size="large" color="gray" />;
  }

  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }}>
        <View style={styles.busqueda}>
          <Text style={styles.nombreUsuario}>{'Bienvenido ' + username}</Text>
          <View style={styles.containerSearch}>
            <View style={[styles.input, style = { marginRight: 8 }]}>
              <SearchBar style={{ fontSize: 14 }}
                platform='android'
                placeholder='Origen'
                onChangeText={setSearchTextOrigen}
                value={searchTextOrigen}
              />
            </View>
            <View style={styles.input}>
              <SearchBar style={{ fontSize: 14 }}
                platform='android'
                placeholder='Destino'
                onChangeText={setSearchTextDestino}
                value={searchTextDestino}
              />
            </View>
          </View>
        </View>

        
      </View>

      <View style={styles.backgroundCard}>
        <ScrollView style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.viajesContainer}>
            <Text style={styles.viajesTitulo}>Viajes</Text>
            {viajesData
              .filter(viaje =>
                viaje.origen.trim().toLowerCase().includes(searchTextOrigen.toLowerCase())
              )
              .filter(viaje =>
                viaje.destino.trim().toLowerCase().includes(searchTextDestino.toLowerCase())
              )
              .map((viaje, index) => (
                <TouchableOpacity key={index} style={[styles.cardContainer, styles.cardViajes]} onPress={() => navigateToDetallesViaje(viaje)}>
                  <Text style={styles.cardTitulo}>{viaje.origen + " - " + viaje.destino}</Text>
                  <Text style={styles.cardSubtitulo}>
                    <Text style={{ fontWeight: 'bold' }}>Salida:</Text> {formatoHora(viaje.horaSalida)}
                  </Text>
                  <Text style={styles.cardSubtitulo}>
                    <Text style={{ fontWeight: 'bold' }}>Llegada:</Text> {formatoHora(viaje.horaLlegada)}
                  </Text>
                </TouchableOpacity>
              ))}
            {viajesData
              .filter(viaje =>
                viaje.origen.trim().toLowerCase().includes(searchTextOrigen.toLowerCase())
              )
              .filter(viaje =>
                viaje.destino.trim().toLowerCase().includes(searchTextDestino.toLowerCase())
              )
              .length === 0 && (
                <View style={{ height: 150, justifyContent: 'center' }}>
                  <Text style={styles.noResultsText}>No se encontraron resultados.</Text>
                </View>
              )}
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
  },
  noResultsText: {
    fontSize: 18,
    textAlign: 'center',
  }
});