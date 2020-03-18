import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { MaterialIcons } from '@expo/vector-icons';

export default function Students(){
  return(
    <View style={styles.card}>
      <MaterialIcons name='school' size={79} color={colors.white}/>
      <Text style={styles.label}>Alunos</Text>
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