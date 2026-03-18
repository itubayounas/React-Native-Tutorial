import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
  const data=[
    {id:1,value:"name"},
      {id:2,value:"name"},
      {id:3 ,value:"fatima"},
  ]   
const Flat_List = () => {
     const renderItem=({item})=>(
      <View>
        <Text>{item.value}</Text>
      </View>

     )
      
     

  return (
    <View style={styles.container} >
    
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      /> 
      

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    margin:20,
    padding:20,
    backgroundColor:"red",
    
   
  }
})

export default Flat_List