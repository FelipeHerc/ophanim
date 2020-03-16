import React from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import Colors from '../styles/colors';
import Logo from '../../assets/Logo.png';
import GradientButton from 'react-native-gradient-buttons';

export default function FirstPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={Logo}
      />
      <View>
        <View style={styles.button}>
          <GradientButton
            style={styles.button}
            text="LOGIN"
            textStyle={{ fontSize: 14 }}
            gradientBegin={Colors.green}
            gradientEnd={Colors.lightGreen}
            gradientDirection="vertical"
            height={40}
            width={250}
            radius={15}
            impact
            impactStyle='Light'
            onPressAction={() => navigation.navigate('Login')}
          />
        </View>

        <View>
          <Text style={styles.text}
            onPress={() => Linking.openURL('http://portal.jtptransportes.com.br')}>
              Primeiro acesso? Clique aqui
          </Text>
          <Text style={styles.text}
            onPress={() => Linking.openURL('http://portal.jtptransportes.com.br')}>
              Esqueceu sua senha?
          </Text>
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
    justifyContent: 'space-around',
  },
  logo: {
    justifyContent: 'center',
    width: 221,
    height: 200,
  },
  text: {
    color: 'white',
    marginTop: 10, 
    fontFamily: 'hyundaiLight',
    textAlign: 'center',
  },
  button: {
    marginBottom: 10
  }
});
