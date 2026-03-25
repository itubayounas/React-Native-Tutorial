import { View, Text, ActivityIndicator } from 'react-native'
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            </View>
        )}
    </View>
  )
}

export default Loader