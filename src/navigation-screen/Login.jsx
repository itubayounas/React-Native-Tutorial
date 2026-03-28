import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const Login = ( { navigation } ) => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password || !name) {
      Alert.alert('All fields are required.Fill them');
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    Alert.alert('Success', 'Login successful');
    navigation.navigate('Home',{
      name:name,
      email:email,
    });
    setname('');
    setEmail('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputLabels} placeholder="Username" value={name} onChangeText={setname} />
      <TextInput style={styles.inputLabels} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.inputLabels} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />
      <TouchableOpacity
       onPress={handleSubmit}
        style={{
          backgroundColor: 'lightblue',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
          width: 100,
        }}
      >
        <Text style={{ color: 'white ', fontSize: 18, textAlign: 'center' }}>
          Log in
        </Text>
       
      </TouchableOpacity>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  inputLabels: {
    fontSize: 16,
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    width: 250,
    borderRadius: 5,
  },
});
