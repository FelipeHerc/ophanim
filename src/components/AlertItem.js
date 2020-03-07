import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';

export default function AlertItem({date, vehicle, acepta}) {
  return(
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.row}>
          <Text style={styles.titleText}>Data: </Text>
          <Text style={styles.itemText}>{date}      </Text>
          <Text style={styles.titleText}>Acepta: </Text>
          <Text style={styles.itemText}>{acepta}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.titleText}>Veículo: </Text>
          <Text style={styles.itemText}>{vehicle}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
  marginHorizontal: 7,
  paddingVertical: 7,
  paddingLeft: 10,
  height: 70,
  marginBottom: 7,
  backgroundColor: colors.lightBlue,
  borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-around'
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