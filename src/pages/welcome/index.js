import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import './style'

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/logoApp.png")}
        style={styles.logo}
      />
      <Text style={styles.h1}>Bem Vindo ao Minha Cidade!</Text>
      <Text style={styles.p}>Conheça melhor a sua, ou qualquer outra cidade.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.login} >Fazer Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '90%',
    height: 250,
  },

  h1: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 29,
    color: '#7C73E6',
  },

  p: {
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: 16,
    width: '60%',
    textAlign: 'center',
    color: '#4F4F4F',
    lineHeight: 25,
  },

  button: {
    width: '70%',
    height: 60,
    marginTop: '20%',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C73E6',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  login: {
    color: '#7C73E6',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '7%',
  }
});
