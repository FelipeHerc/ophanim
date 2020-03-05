import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Header from '../components/Header';
import colors from '../styles/colors';
import MenuCard from '../components/MenuCard';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header/>
        <View style={styles.menuCards}>
          <View style={styles.row}>
            <MenuCard label='Rota' variant='FontAwesome' icon='road'/>
            <MenuCard label='Alunos' variant='MaterialIcons' icon='school'/>
          </View>
          <View style={styles.row}>
            <MenuCard label='Checklist' variant='Feather' icon='check-square'/>
            <TouchableHighlight 
              underlayColor={colors.darkBlue} 
              onPress={() => navigation.navigate('Alert')}
            >
              <MenuCard 
                label='Alerta' 
                variant='Foundation' 
                icon='alert'
              />
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <MenuCard label='Compras' variant='Entypo' icon='shop'/>
            <MenuCard label='Comunicação' variant='FontAwesome' icon='wechat'/>
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
