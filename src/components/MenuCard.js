import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import 
{ 
  Ionicons, 
  FontAwesome, 
  AntDesign, 
  Entypo, 
  EvilIcons, 
  Feather, 
  Foundation, 
  MaterialIcons, 
  MaterialCommunityIcon, 
  SimpleLineIcons, 
  Octicons, 
  Zocial 
} from '@expo/vector-icons';

export default function MenuCard({ label, icon, variant }) {
  return(
    <View style={styles.card}>
      {customIcon(variant, icon)}
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

function customIcon(variant, icon){
  const SIZE = 70;
  const COLOR=colors.white;
  
  switch(variant){
    case 'FontAwesome':
      return (<FontAwesome name={icon} size={SIZE} color={COLOR}/>)

    case 'Ionicons':
      return (<Ionicons name={icon} size={SIZE} color={COLOR}/>)

    case 'AntDesign':
      return (<AntDesign name={icon} size={SIZE} color={COLOR}/>)

    case 'Entypo':
      return (<Entypo name={icon} size={SIZE} color={COLOR}/>)

    case 'EvilIcons':
      return (<EvilIcons name={icon} size={SIZE} color={COLOR}/>)

    case 'Feather':
      return (<Feather name={icon} size={SIZE} color={COLOR}/>)

    case 'Foundation':
      return (<Foundation name={icon} size={SIZE} color={COLOR}/>)

    case 'MaterialIcons':
      return (<MaterialIcons name={icon} size={SIZE} color={COLOR}/>)
    
    case 'MaterialCommunityIcon':
      return (<MaterialCommunityIcon name={icon} size={SIZE} color={COLOR}/>)

    case 'SimpleLineIcons':
      return (<SimpleLineIcons name={icon} size={SIZE} color={COLOR}/>)

    case 'Octicons':
      return (<Octicons name={icon} size={SIZE} color={COLOR}/>)

    case 'Zocial':
      return (<Zocial name={icon} size={SIZE} color={COLOR}/>)
  }

}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 100,
    alignItems: 'center'
  },
  label: {
    fontSize: fonts.big,
    fontFamily: 'ubuntuRegular',
    fontWeight: 'bold',
    color: colors.white,
  }
});