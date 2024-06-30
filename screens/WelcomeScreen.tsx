import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/coffee-logo.png')} // Asegúrate de tener esta imagen en tu proyecto
        style={styles.logo}
      />
      <Text style={styles.title}>Bienvenidos a Café Central</Text>
      <Text style={styles.subtitle}>Tu lugar favorito para un buen café</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
})
