import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { FontAwesome } from '@expo/vector-icons';

export default function Comunication(){
  return(
    <View style={styles.card}>
      <FontAwesome name='wechat' size={75} color={colors.white} style={{ paddingTop: 5}}/>
      <Text style={styles.label}>Comunicação</Text>
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