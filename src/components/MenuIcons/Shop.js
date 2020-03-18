import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Entypo } from '@expo/vector-icons';

export default function Shop(){
  return(
    <View style={styles.card}>
      <Entypo name='shop' size={78} color={colors.white}/>
      <Text style={styles.label}>Compras</Text>
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
    marginBottom: 11
  },
  label: {
    fontSize: fonts.big,
    fontFamily: 'ubuntuBold',
    color: colors.white,
  }
});