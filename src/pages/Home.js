import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Header from '../components/Header';
import colors from '../styles/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Route from '../components/MenuIcons/Route';
import Students from '../components/MenuIcons/Students';
import Checklist from '../components/MenuIcons/Checklist';
import Alert from '../components/MenuIcons/Alert';
import Shop from '../components/MenuIcons/Shop';
import Comunication from '../components/MenuIcons/Comunication';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header/>
        <View style={styles.menuCards}>
          <View style={styles.row}>
            <Route/>
            <Students/>
          </View>
          <View style={styles.row}>
            <Checklist/>
            <TouchableHighlight 
              onPress={() => navigation.navigate('Alert')}
              style={{ borderRadius:20 }}
              >
              <Alert/>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <Shop/>
            <Comunication/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  menuCards: {
    marginVertical: 40,
    flex: 1,
    flexDirection: 'column',
    padding: 40,
  }
});
