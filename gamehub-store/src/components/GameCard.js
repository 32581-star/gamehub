import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameCard({ jogo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{jogo.nome}</Text>
      <Text style={styles.plataforma}>{jogo.plataforma}</Text>
      <Text style={styles.preco}>R$ {jogo.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 3 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#1a1a1a' },
  plataforma: { color: '#666', marginVertical: 4 },
  preco: { color: '#27ae60', fontWeight: 'bold', fontSize: 16 }
});