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
import { ScrollView } from 'react-native';

const PracticeApi = () => {
//   const [data, setData] = useState(null); // Initialize as null to handle display logic
//   const [id, setId] = useState('');

//   const fetchData = async () => {
//     if (!id) {
//       Alert.alert('Error', 'Please enter a valid id');
//       return;
//     }
//     try {
//       // Using template literals to inject the ID into the URL
//       const response = await axios.patch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`,
//         { title: 'Updated Title' } // Example update data   
//       );
//       setData(response.data);
//       console.log(response.data); // Good for debugging in your Metro terminal
//     } catch (error) {
//       Alert.alert('Error', 'Post not found or Network issue');
//       setData(null);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 20, marginBottom: 10 }}>Find Post by ID</Text>

//       <TextInput
//         style={styles.inputfield}
//         placeholder="Enter id (1-10)"
//         keyboardType="numeric" // Better UX for IDs
//         value={id}
//         onChangeText={text => setId(text)} // This connects the UI to State
//       />

//       <TouchableOpacity style={styles.button} onPress={fetchData}>
//         <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
//       </TouchableOpacity>

//       {/* Display the results if data exists */}
//       {data && (
//         <View style={styles.resultCard}>
//           {/* Accessing specific properties of the object */}
//           <Text style={{ fontWeight: 'bold' }}>ID: {data.id}</Text>
//           <Text style={{ fontSize: 16, marginTop: 5 }}>
//             Title: {data.title}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   inputfield: {
//     width: 250,
//     height: 45,
//     borderWidth: 1,
//     borderColor: 'gray',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 5,
//   },
//   resultCard: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#e3f2fd',
//     borderRadius: 10,
//     width: '80%',
//   },
// });
const [data, setData] = useState(null);
  const [id, setId] = useState('');
  const [newTitle, setNewTitle] = useState(''); // State for the update content

  // Logic for PUT (Full Update)
  const handlePut = async () => {
    if (!id || !newTitle) {
      Alert.alert('Error', 'Please enter ID and New Title');
      return;
    }
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id: id,
        title: newTitle,
        body: 'This is a full replacement body', // PUT usually requires full data
        userId: 1,
      });
      setData(response.data);
      Alert.alert('Success', 'PUT: Resource fully replaced');
    } catch (error) {
      Alert.alert('Error', 'Update failed');
    }
  };

  // Logic for PATCH (Partial Update)
  const handlePatch = async () => {
    if (!id || !newTitle) {
      Alert.alert('Error', 'Please enter ID and New Title');
      return;
    }
    try {
      const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: newTitle, // Only sending the field we want to change
      });
      setData(response.data);
      Alert.alert('Success', 'PATCH: Only title updated');
    } catch (error) {
      Alert.alert('Error', 'Update failed');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Update Practice (PUT/PATCH)</Text>

      <TextInput
        style={styles.inputfield}
        placeholder="Post ID (1-100)"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />

      <TextInput
        style={styles.inputfield}
        placeholder="Enter New Title"
        value={newTitle}
        onChangeText={setNewTitle}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={handlePut}>
          <Text style={styles.btnText}>PUT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: 'purple' }]} onPress={handlePatch}>
          <Text style={styles.btnText}>PATCH</Text>
        </TouchableOpacity>
      </View>

      {data && (
        <View style={styles.resultCard}>
          <Text style={{ fontWeight: 'bold' }}>Server Response:</Text>
          <Text>ID: {data.id}</Text>
          <Text>Updated Title: {data.title}</Text>
          <Text>Body: {data.body}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 50 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  inputfield: { width: 280, height: 45, borderWidth: 1, borderColor: 'gray', backgroundColor: '#f0f0f0', borderRadius: 8, paddingHorizontal: 15, marginBottom: 10 },
  buttonRow: { flexDirection: 'row', gap: 10 },
  button: { paddingVertical: 12, paddingHorizontal: 30, borderRadius: 5, minWidth: 100 },
  btnText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  resultCard: { marginTop: 20, padding: 15, backgroundColor: '#e8f5e9', borderRadius: 10, width: '85%', borderWidth: 1, borderColor: '#c8e6c9' },
});



export default PracticeApi;
