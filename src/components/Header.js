import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Logo from '../../assets/blackLogo.png'
import colors from '../styles/colors';

export default function Header() {
  return(
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={Logo}
      />
      <View style={styles.button}>
        <Button 
          title="SOS"
          color={colors.red}
          style={styles.button}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.blue,
    width: '100%',
    padding: 5,
  },
  image: {
    justifyContent: 'center',
    width: 155,
    height: 40,
    marginLeft: 10,
  },
  button: {
    marginRight: 10,
    width: '20%',
  }
});