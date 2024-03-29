import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ComprarBoleto from '../../trips/adapters/screens/components/ComprarBoleto';
import PaseLista from '../../trips/adapters/screens/components/Conductor/PaseLista';
import HomeCon from '../../home/adapters/screens/HomeCon';
import DetallesViajeCon from '../../trips/adapters/screens/components/Conductor/DetallesViajeCon';
const Stack = createStackNavigator();

const HomeComStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="HomeCon"
                component={HomeCon}
                options={{
                    title: 'ViajaBara',
                    headerStyle: {
                        backgroundColor: '#fd1400'
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    
                
                }}
            />
            <Stack.Screen
                name="DetallesViajeCon"
                component={DetallesViajeCon} 
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
                name="PaseLista"
                component={PaseLista}
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

export default HomeComStack;
