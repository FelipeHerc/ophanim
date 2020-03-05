import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';

export default function AlertItem({date, vehicle, acepta}) {
  return(
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.textRow}>
          <Text style={styles.titleText}>Data: </Text>
          <Text style={styles.itemText}>{date}</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.titleText}>Acepta: </Text>
          <Text style={styles.itemText}>{acepta}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text>{vehicle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
  marginHorizontal: 7,
  padding: 5,
  height: 70,
  marginBottom: 7,
  backgroundColor: colors.lightBlue,
  borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRow: {
    flexDirection: 'row',

    alignSelf: 'flex-start'

  },
  titleText: {
    fontFamily: 'ubuntuBold',
    fontSize: 18,
  },
  itemText: {
    fontFamily: 'ubuntuRegular',
    fontSize: 18,
  }
});