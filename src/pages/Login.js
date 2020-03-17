import React, { useState } from 'react';
import { StyleSheet, Button, View, Image, TextInput, Text } from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';
import JTPLogo from '../../assets/jtp.png';
import GradientButton from 'react-native-gradient-buttons';

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
      <GradientButton
        text="LOGIN"
        textStyle={{ fontSize: 14 }}
        gradientBegin={Colors.green}
        gradientEnd={Colors.lightGreen}
        gradientDirection="vertical"
        height={40}
        width={250}
        radius={20}
        impact
        impactStyle='Light'
        onPressAction={() => navigation.navigate('Home')}
      />        
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
    borderRadius: 20, 
    borderColor: 'white', 
    borderWidth: 1, 
    backgroundColor: Colors.blue, 
    width: 260, 
    padding: 10, 
    margin: 5,
    fontFamily: 'ubuntuRegular',
    color: 'white'
  },
  button: {
    padding: 50  
  },
  inputBox: {
    margin: 10,
    marginBottom: 50
  },
  buttonBox: {
    marginBottom: 50,
    alignContent: 'center'
  },
  JTPLogo: {
    alignItems: 'center',
    width: 221,
    height: 200,
    marginBottom: 100
  },
});
