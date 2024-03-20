import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../home/adapters/screens/Home';
import DetallesViaje from '../../trips/adapters/screens/components/DetallesViaje';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
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
            <Stack.Screen
                name="DetallesViaje"
                component={DetallesViaje} // Asigna la pantalla de detalles del viaje como componente
                options={{
                    title: 'Detalles del Viaje', // Puedes personalizar el título de la pantalla de detalles del viaje aquí
                    headerStyle: {
                        backgroundColor: '#fd1400'
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white' // Cambia el color del botón de retroceso
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;
