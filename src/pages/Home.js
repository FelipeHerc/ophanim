import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Ir para splash"
        onPress={() => navigation.navigate('Splash')}
      />
      <Button
        title="Ir para login"
        onPress={() => navigation.navigate('Login')}
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
