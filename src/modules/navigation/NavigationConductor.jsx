import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
import HomeConStack from './stackConductor/HomeConStack';
import ProfileStack from './stack/ProfileStack';

const Tab = createBottomTabNavigator();

const NavigationConductor = () => {
  return (
    
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
        <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile' }} />
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  }
});

const getIconName = (routeName, focused) => {
  let iconName = '';
  let iconType = 'material-community';

  switch (routeName) {
    case 'HomeConStack':
      iconName = focused ? 'home' : 'home';
      break;
    case 'ProfileStack':
      iconName = focused ? 'account' : 'account';
      break;
    default:
      iconName = 'questionmark-circle';
  }

  return { iconName, iconType };
};

export default NavigationConductor;
