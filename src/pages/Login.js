import React, { useState } from 'react';
import { StyleSheet, Button, View, Image, TextInput, Text } from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';
import JTPLogo from '../../assets/jtp.png';

export default function Login({ navigation }) {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.JTPLogo}
          source={JTPLogo}
        />
      </View>
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
        <View style={styles.buttonBox}>
          <Button title="LOGIN" style={styles.button} onPress={() => navigation.navigate('Home')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 260, 
    padding: 5, 
    margin: 5,
    fontFamily: 'ubuntuRegular'
  },
  button: {
    padding: 50  
  },
  inputBox: {
    margin: 10
  },
  buttonBox: {
    marginHorizontal: 80,
    marginBottom: 50
  },
  JTPLogo: {
    alignItems: 'center',
    width: 221,
    height: 200,
    marginBottom: 100
  },
});
