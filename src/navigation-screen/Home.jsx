import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({route}) => {
  const { name, email } = route.params || { name: "Guest", email: "N/A" };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen!</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={{ color: 'blue', fontSize: 16, borderWidth: 1, borderColor: 'blue', margin: 10,padding: 10 }}>Go to About</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // CRITICAL: This makes the view fill the screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige', 
  },
  text: {
    fontSize: 20,
    color: 'black'
  }
})

export default Home;