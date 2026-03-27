import { View, Text, ActivityIndicator, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const[data, setData] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setLoading(true);
        setTimeout(() => {
            setData("Data fetched successfully!");
            setLoading(false);
        }, 2000);

    }
    const handlePress = () => {
        alert("Button Pressed!");
    }
    const handlePressIn = () => {
        alert("Button Pressed In!");
    }
    const handlePressOut = () => {
        alert("Button Pressed Out!");
    }

  return (
    <View style={styles.container}>
        {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View>
                <Text style={{ fontSize: 18, marginBottom: 10 }}>{data}</Text>
                <TouchableOpacity 
                    onPress={fetchData} 
                    style={{ backgroundColor: '#0000ff', padding: 10, borderRadius: 5 }}
                >
                    <Text style={{ color: 'white' }}>Refetch Data</Text>
                </TouchableOpacity>
                <Pressable style={styles.button}
                // onPress={handlePress}
                // onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                >
                    <Text style={styles.btntext}>Pressable Button</Text>
                </Pressable>
            </View>
        )}
    </View>
  )
}

export default Loader
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#0000ff',
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },
  btntext:
  {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})