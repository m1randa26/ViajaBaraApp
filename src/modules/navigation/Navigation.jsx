import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import HomeStack from './stack/HomeStack';
import ProfileStack from './stack/ProfileStack';
import TripsStack from './stack/TripsStack';

// Creamos nuestra barra de navegacion
const Tab = createBottomTabNavigator();

// Creamos nuestro componente
export default function Navigation() {
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
                <Tab.Screen name='HomeStack' component={HomeStack} options={{ title: 'Home' }} />
                <Tab.Screen name='SearchStack' component={TripsStack} options={{ title: 'Trips' }} />
                <Tab.Screen name='ProfileStack' component={ProfileStack} options={{ title: 'Profile' }} />


            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

// Funcion que cambia el icono de la barra de navegacion dependiendo del focus
const getIconName = (routeName, focused) => {
    let iconName = '';
    // Libreria de iconos
    let iconType = 'material-community';

    switch (routeName) {
        case 'HomeStack':
            iconName = focused ? 'home' : 'home';
            break;
        case 'ProfileStack':
            iconName = focused ? 'account' : 'account';
            break;
        case 'SearchStack':
            iconName = focused ? 'compass' : 'compass';
            break;
        default:
            iconName = 'questionmark-circle'; // Un icono por defecto
    }

    return { iconName, iconType };
};