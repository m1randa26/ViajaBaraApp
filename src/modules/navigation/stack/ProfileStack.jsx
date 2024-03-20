import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../profile/adapters/screens/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="UserGuest">
      <Stack.Screen
        name="Profile"
        component={Profile}
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

export default ProfileStack

const styles = StyleSheet.create({})