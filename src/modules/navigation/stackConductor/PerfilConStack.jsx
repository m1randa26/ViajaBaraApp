import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../profile/adapters/screens/PerfilCon';
import Auth from '../../auth/adapters/screens/Auth';
import Register from '../../auth/adapters/screens/Register';

const Stack = createStackNavigator();

const PerfilConStack = () => {
  return (
    <Stack.Navigator initialRouteName="UserGuest">
      <Stack.Screen
        name="PerfilConStack"
        component={PerfilConStack}
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
      <Stack.Screen
            name='Auth'
            component={Auth}
            options={{
                title: 'inicio de sesion',
                headerStyle: {
                    backgroundColor: '#fd1400'
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'white'
            }}
            />
            <Stack.Screen
            name='Register'
            component={Register}
            options={{
                title: 'Crear cuenta',
                headerStyle: {
                    backgroundColor: '#fd1400'
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'white'
            }}
            />
    </Stack.Navigator>
  )
}

export default PerfilConStack

const styles = StyleSheet.create({})