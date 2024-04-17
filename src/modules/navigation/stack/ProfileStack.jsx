import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../profile/adapters/screens/Profile';
import Auth from '../../auth/adapters/screens/Auth';
import Register from '../../auth/adapters/screens/Register';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const ProfileStack = ({ navigation, route }) => {
  const { setUserRole } = route.params;

  console.log('setUserRole en ProfileStack:', setUserRole);

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={{ setUserRole: setUserRole }}
        options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: '#FE1300',
            borderBottomWidth: 0,
            elevation: 0, // Para Android
            shadowOpacity: 0, // Para iOS
          },
          headerTintColor: 'white'
        }}
      />
      <Stack.Screen
        name='Auth'
        component={Auth}
        options={{
          title: 'Inicio de sesión',
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
      <Stack.Screen
  name="AuthStack"
  component={AuthStack}
  initialParams={{ setUserRole: setUserRole }}
/>
    </Stack.Navigator>
  )
}

export default ProfileStack;
