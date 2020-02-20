import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
      <Button
        title="Ir para login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Ir para home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
