import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';

export default function Login({ navigation }) {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.font}>JTP Transportes</Text>
      <View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="nome@example.com"
            value={email}
            onChangeText={email => onChangeEmail(email)}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={password => onChangePassword(password)}
            secureTextEntry
          />
        </View>
        <Button title="LOGIN" style={styles.button}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  font: {
    fontSize: Fonts.huge,
    fontFamily: 'hyundaiBold',
    color: Colors.white,
    letterSpacing: 3
  },
  input: {
    height: 40, 
    borderColor: 'white', 
    borderWidth: 1, 
    backgroundColor: 'white', 
    width: 200, 
    padding: 5, 
    margin: 5,
    fontFamily: 'ubuntuRegular'
  },
  button: {
    padding: 50  
  },
  inputBox: {
    margin: 10
  }
});
