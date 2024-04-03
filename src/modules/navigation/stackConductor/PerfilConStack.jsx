import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../profile/adapters/screens/Profile';
import PerfillCon from '../../profile/adapters/screens/PerfilCon';

const Stack = createStackNavigator();

const PerfilConStack = () => {
  return (
    <Stack.Navigator initialRouteName="UserGuest">
      <Stack.Screen
        name="PerfilCon"
        component={PerfillCon}
        options={
          {
            title: 'Perfil',
            headerStyle: {
              backgroundColor: '#FE1300',
              borderBottomWidth: 0,
              elevation: 0, // Para Android
              shadowOpacity: 0, // Para iOS
            },
            headerTintColor: 'white'
          }
        }
      />
    </Stack.Navigator>
  )
}

export default PerfilConStack

const styles = StyleSheet.create({})