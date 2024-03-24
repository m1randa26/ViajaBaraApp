import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../home/adapters/screens/Home';
import DetallesViaje from '../../trips/adapters/screens/components/DetallesViaje';
import ComprarBoleto from '../../trips/adapters/screens/components/ComprarBoleto';
import DetallesPoxViaje from '../../trips/adapters/screens/components/DetallesPoxViaje';
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
                component={DetallesViaje} 
                options={{
                    title: 'Detalles del Viaje', 
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
                name="DetallesPoxViaje"
                component={DetallesPoxViaje}
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
            name='ComprarBoleto'
            component={ComprarBoleto}
            options={{
                title: 'Comprar boleto',
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
    );
}

export default HomeStack;
