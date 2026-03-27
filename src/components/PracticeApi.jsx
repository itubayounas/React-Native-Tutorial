import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PracticeApi = () => {
  const [data, setData] = useState(null); // Initialize as null to handle display logic
  const [id, setId] = useState('');

  const fetchData = async () => {
    if (!id) {
      Alert.alert('Error', 'Please enter a valid id');
      return;
    }
    try {
      // Using template literals to inject the ID into the URL
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      setData(response.data);
      console.log(response.data); // Good for debugging in your Metro terminal
    } catch (error) {
      Alert.alert('Error', 'Post not found or Network issue');
      setData(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Find Post by ID</Text>

      <TextInput
        style={styles.inputfield}
        placeholder="Enter id (1-10)"
        keyboardType="numeric" // Better UX for IDs
        value={id}
        onChangeText={text => setId(text)} // This connects the UI to State
      />

      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>

      {/* Display the results if data exists */}
      {data && (
        <View style={styles.resultCard}>
          {/* Accessing specific properties of the object */}
          <Text style={{ fontWeight: 'bold' }}>ID: {data.id}</Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>
            Title: {data.title}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputfield: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  resultCard: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    width: '80%',
  },
});

export default PracticeApi;
