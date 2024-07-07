import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
  
  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const navigation = useNavigation();
  
    const handleLogin = () => {
      navigation.navigate('MenuTab', {screen: 'Beranda'});
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
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
      padding: 16,
      backgroundColor: '#3498db',
    },
    title: {
      fontSize: 24,
      marginBottom: 24,
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: '#C9C9C9',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    button: {
      width: '40%',
      height: 40,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      marginTop: 16,
      borderWidth: 1,
      borderColor: '#C9C9C9',
    },
    buttonText: {
      color: '#55CB95',
      fontSize: 16,
    },
  });