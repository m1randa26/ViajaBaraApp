import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import HomeConStack from './stackConductor/HomeConStack';
import PerfilConStack from './stackConductor/PerfilConStack';


// Creamos nuestra barra de navegacion
const Tab = createBottomTabNavigator();

// Creamos nuestro componente
export default function Navigation() {
    return (
        <NavigationContainer styles={styles.container}>
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
                <Tab.Screen name='HomeConStack' component={HomeConStack} options={{ title: 'Home' }} />
                <Tab.Screen name='PerfilConStack' component={PerfilConStack} options={{ title: 'Profile' }} />


            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    }
});

// Funcion que cambia el icono de la barra de navegacion dependiendo del focus
const getIconName = (routeName, focused) => {
    let iconName = '';
    // Libreria de iconos
    let iconType = 'material-community';

    switch (routeName) {
        case 'HomeConStack':
            iconName = focused ? 'home' : 'home';
            break;
        case 'PerfilConStack':
            iconName = focused ? 'account' : 'account';
            break;
        
        default:
            iconName = 'questionmark-circle'; // Un icono por defecto
    }

    return { iconName, iconType };
};