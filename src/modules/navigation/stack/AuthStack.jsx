import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../../auth/adapters/screens/Auth';
import Register from '../../auth/adapters/screens/Register';

const Stack = createStackNavigator();

const AuthStack = ({ navigation, route }) => {
  // Obtener setUserRole de las params
  const { setUserRole } = route.params;

  // Configurar setUserRole en las opciones de navegación
  React.useLayoutEffect(() => {
    navigation.setOptions({
      setUserRole: setUserRole
    });
  }, [navigation, setUserRole]);

  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}>
      <Stack.Screen
        name="Auth"
        // Pasar setUserRole como prop al componente Auth
        children={() => <Auth setUserRole={setUserRole} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"  
        component={Register}
        options={{ title: 'Registro' }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
