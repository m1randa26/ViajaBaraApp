import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Trips from '../../trips/adapters/screens/Trips';

const Stack = createStackNavigator();

const TripsStack = () => {
  return (
    <Stack.Navigator initialRouteName="UserGuest">
            <Stack.Screen
            name="Trips"
            component={Trips}
            options={{title: 'Viajes'}}
            />
        </Stack.Navigator>
  )
}

export default TripsStack

const styles = StyleSheet.create({})