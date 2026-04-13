import React from 'react';
import { View, FlatList, StyleSheet, Button, Text } from 'react-native';
import GameCard from '../components/GameCard';

const DADOS_MOCK = [
  { id: '1', nome: 'Elden Ring', plataforma: 'PS5', preco: '249,90' },
  { id: '2', nome: 'Zelda: TotK', plataforma: 'Switch', preco: '299,00' },
  { id: '3', nome: 'Halo Infinite', plataforma: 'Xbox', preco: '190,00' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Bem-vindo à GameStore</Text>
        <Button title="Anunciar Jogo" onPress={() => navigation.navigate('Cadastro')} color="#6200ee" />
      </View>

      <FlatList
        data={DADOS_MOCK}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard jogo={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee' },
  welcome: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  list: { padding: 20 }
});