import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Feather } from '@expo/vector-icons';

export default function Checklist(){
  return(
    <View style={styles.card}>
      <Feather name='check-square' size={77} color={colors.white} style={{ paddingTop: 3}}/>
      <Text style={styles.label}>Checklist</Text>
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