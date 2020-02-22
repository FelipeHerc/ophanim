import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from '../styles/statusBar';
import colors from '../styles/colors';
const backgroundColor = colors.blue;
const GeneralStatusBarColor = ({ ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default GeneralStatusBarColor;