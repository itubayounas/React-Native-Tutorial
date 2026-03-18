import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useState } from 'react'
import Flat_List from './src/components/Flat_List'
// import { FlatList } from 'react-native/types_generated/index'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Flat_List/>
      <Text style={{fontSize: 40}}>App folder in screen</Text>
      <Text>{count}</Text>
      <Button title="+"  style={{margin: 10}} onPress={()=>{
        setCount(count + 1);
      }}/>
      <Button title="-"  style={{margin: 10}} onPress={()=>{
        setCount(count - 1);
      }}/>

    </View>
  )
}

export default App