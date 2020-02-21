import React from 'react';
import { StyleSheet, View, Button, Text, Image, Linking } from 'react-native';
import Colors from '../styles/colors';
import Logo from '../../assets/Logo.png';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={Logo}
      />
      <View>
        <Button
          title="LOGIN"
          onPress={() => navigation.navigate('Login')}
        />
        <Text style={styles.forgotPassword}
          onPress={() => Linking.openURL('http://google.com')}>
            Esqueceu sua senha?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    justifyContent: 'center',
    width: 277,
    height: 251,
  },
  forgotPassword: {
    color: 'white', 
    margin: 25,
  }
});
