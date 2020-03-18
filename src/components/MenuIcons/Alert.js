import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Foundation } from '@expo/vector-icons';

export default function Alert(){
  return(
    <View style={styles.card}>
      <Foundation name='alert' size={80} color={colors.white}/>
      <Text style={styles.label}>Alertas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 120,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.lazulli,
  },
  label: {
    fontSize: fonts.big,
    fontFamily: 'ubuntuBold',
    color: colors.white,
  }
});