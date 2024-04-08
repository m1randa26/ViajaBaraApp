import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import HomeStack from './stack/HomeStack';
import ProfileStack from './stack/ProfileStack';
import TripsStack from './stack/TripsStack';
import HomeConStack from './stackConductor/HomeConStack';
import PerfilConStack from './stackConductor/PerfilConStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const [isConductor, setIsConductor] = useState(false);

  useEffect(() => {
    // Lógica para obtener el id_role del almacenamiento local
    const fetchUserRole = async () => {
      try {
        const id_role = await AsyncStorage.getItem('id_role');
        setIsConductor(id_role === '3'); // Convertir a booleano y establecer isConductor
      } catch (error) {
        console.error('Error al obtener el id_role del almacenamiento local:', error);
        // Manejo de errores, por ejemplo, establecer isConductor en false
        setIsConductor(false);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return <Icon name={iconName} type={iconType} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fd1400',
          tabBarInactiveTintColor: 'gray',
          tabBarLabel: () => null,
          headerShown: false,
        })}
      >
        {isConductor ? (
          <>
            <Tab.Screen name='HomeConStack' component={HomeConStack} options={{ title: 'Home' }} />
            <Tab.Screen name='PerfilConStack' component={PerfilConStack} options={{ title: 'Profile' }} />
          </>
        ) : (
          <>
            <Tab.Screen name='HomeStack' component={HomeStack} options={{ title: 'Home' }} />
            <Tab.Screen name='SearchStack' component={TripsStack} options={{ title: 'Trips' }} />
            <Tab.Screen name='ProfileStack' component={ProfileStack} options={{ title: 'Profile' }} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = 'material-community';

  switch (routeName) {
    case 'HomeStack':
    case 'HomeConStack':
      iconName = focused ? 'home' : 'home';
      break;
    case 'ProfileStack':
    case 'PerfilConStack':
      iconName = focused ? 'account' : 'account';
      break;
    case 'SearchStack':
      iconName = focused ? 'compass' : 'compass';
      break;
    default:
      iconName = 'questionmark-circle'; // Un icono por defecto
  }

  return { iconName, iconType };
};
