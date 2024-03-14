import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../home/adapters/screens/Home';

const Stack = createStackNavigator();

const CustomHeaderTitle = () => {

}

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="UserGuest">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'ViajaBara',
                    headerStyle: {
                        backgroundColor: '#fd1400'
                    },
                    headerTitleStyle: {
                        color: 'white'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})