import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here, e.g., make an API call to authenticate
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image source={require('./photos/739ad4f69b21ba2d2e0dc927a31e22eb-removebg-preview.png')}style={styles.logo}/>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'#ccc'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#ccc'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={{ backgroundColor: '#4CAF50', padding: 15, borderRadius: 5 }} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <Text style={styles.terms}>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    shadowColor: '#fff'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
  },
  terms: {
    color: '#ccc',
    fontSize: 12,
  },
  button:{
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    //marginRadius: 10,
    marginBottom: 20,
    color: '#ccc',
    backgroundColor: '#222',
  },
})

export default LoginPage;
