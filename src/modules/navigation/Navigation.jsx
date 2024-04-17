// Navigation.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/base';
import HomeStack from './stack/HomeStack';
import TripsStack from './stack/TripsStack';
import ProfileStack from './stack/ProfileStack';
import HomeConStack from './stackConductor/HomeConStack';
import PerfilConStack from './stackConductor/PerfilConStack';
import AuthStack from './stack/AuthStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const idRole = JSON.parse(userData).role.id_role;
          setUserRole(idRole);
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return null;
  }

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
        {userRole === 3 ? (
          <>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
            <Tab.Screen name="TripsStack" component={TripsStack} options={{ title: 'Trips' }} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile' }} initialParams={{ setUserRole: setUserRole }} />
          </>
        ) : userRole === 2 ? (
          <>
            <Tab.Screen name='HomeConStack' component={HomeConStack} options={{ title: 'inicio' }} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile' }} initialParams={{ setUserRole: setUserRole }} />
          </>
        ) : (
          <Tab.Screen name="AuthStack" component={AuthStack} initialParams={{ setUserRole: setUserRole }} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = 'material-community';

  switch (routeName) {
    case 'HomeStack':
      iconName = focused ? 'home' : 'home';
      break;
    case 'HomeConStack':
      iconName = focused ? 'home' : 'home';
      break;
    case 'PerfilConStack':
      iconName = focused ? 'account' : 'account';
      break;
    case 'ProfileStack':
      iconName = focused ? 'account' : 'account';
      break;
    case 'TripsStack':
      iconName = focused ? 'compass' : 'compass';
      break;
    default:
  }

  return { iconName, iconType };
};

export default Navigation;
