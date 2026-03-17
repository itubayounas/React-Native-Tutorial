import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 40}}>App folder in screen</Text>
      <Text>Welcome to the App!</Text>
      <Button title="Press me" />
    </View>
  )
}

export default App