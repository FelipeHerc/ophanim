import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import colors from '../styles/colors';
import AlertItem from '../components/AlertItem';
import alertMock from '../../mock/alerts';

export default function Alert() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.viewArea}>
        <ScrollView>
          {
            alertMock.alerts.map(
              (alert) => (
                <AlertItem
                  key={alert.id}
                  date={alert.date} 
                  vehicle={alert.vehicle} 
                  acepta={alert.acepta}
                />
              )
            )
          }  
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  viewArea:{
    paddingTop: 7,
    paddingBottom: 50
  }
})