import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CadastroScreen from '../screens/CadastroScreen';

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Minha Loja' }} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Novo Jogo' }} />
    </Stack.Navigator>
  );
}