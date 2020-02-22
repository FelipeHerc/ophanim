import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Header from '../components/Header';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
