import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title="Ir para splash"
        onPress={() => navigation.navigate('Splash')}
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
