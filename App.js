import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView style={styles.area}>
      <Image style={styles.img} source={require('./logo-senai1.png')} />
      <Text style={styles.text}>Bem-vindo ao Senai</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Usuario'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Senha'
        keyboardType='numeric'
      />
      <Button style={styles.btn}>Confirmar</Button>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  area: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img:{
    marginBottom:10,
    height:100,
    width:200,
  },
  btn:{
    height: 10,
    width: 10,
  },
  });

export default App;