import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LoginForm from './src/components/LoginForm'  
import Flat_List from './src/components/Flat_List'
import { Button } from 'react-native'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1 }}>  {/* important to fill screen */}
      
      {/* Flat_List with limited height */}
      <Flat_List style={{ height: 250 }} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LoginForm />

        <Text style={{ fontSize: 40 }}>App in screen</Text>
        <Text>{count}</Text>

        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
      </ScrollView>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  }
})