import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Context } from '../../Context/AuthContext.js'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  const { handleLogout } = useContext(Context)

  async function logout() {
    navigation.navigate('Welcome')
    await handleLogout()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Voltar</Text>
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
})