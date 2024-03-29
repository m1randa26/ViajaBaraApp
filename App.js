import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/modules/navigation/Navigation';
import Auth from './src/modules/auth/adapters/screens/Auth';
import Register from './src/modules/auth/adapters/screens/Register';
import NavigationConductor from './src/modules/navigation/NavigationConductor';


export default function App() {
  return (
    <Navigation/>
  );
}
