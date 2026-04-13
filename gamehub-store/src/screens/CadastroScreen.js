import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';

export default function CadastroScreen({ navigation }) {
  const [form, setForm] = useState({ nome: '', plataforma: '', preco: '' });
  const [erros, setErros] = useState({});

  const validar = () => {
    let novosErros = {};
    if (!form.nome) novosErros.nome = "O nome é obrigatório";
    if (!form.plataforma) novosErros.plataforma = "Informe a plataforma";
    if (!form.preco) novosErros.preco = "Informe o preço";
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const salvar = () => {
    if (validar()) {
      Alert.alert("Sucesso", "Jogo cadastrado no catálogo!");
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomInput 
        label="Nome do Jogo"
        placeholder="Ex: God of War"
        value={form.nome}
        onChangeText={(val) => setForm({...form, nome: val})}
        error={erros.nome}
      />
      <CustomInput 
        label="Plataforma"
        placeholder="Ex: PS5, PC, Xbox"
        value={form.plataforma}
        onChangeText={(val) => setForm({...form, plataforma: val})}
        error={erros.plataforma}
      />
      <CustomInput 
        label="Preço"
        placeholder="Ex: 199.90"
        keyboardType="numeric"
        value={form.preco}
        onChangeText={(val) => setForm({...form, preco: val})}
        error={erros.preco}
      />
      
      <View style={{ marginTop: 20 }}>
        <Button title="Confirmar Cadastro" onPress={salvar} color="#27ae60" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' }
});