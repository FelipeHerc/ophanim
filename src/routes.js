import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Login from './pages/Login';
import { AdMobBanner} from 'expo-ads-admob';
import StatusBar from './components/statusBar';

const Stack = createStackNavigator();

function Routes() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <AdMobBanner bannerSize="banner"/>
      </NavigationContainer>
  );
}

export default Routes;