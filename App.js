import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello perros !</Text>
      <Text>Hola gatos tambien uwu</Text>
      <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
