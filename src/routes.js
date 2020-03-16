import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Alert from './pages/Alert'
import { AdMobBanner} from 'expo-ads-admob';
import StatusBar from './components/statusBar';

const Stack = createStackNavigator();

function Routes() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator initialRouteName="FirstPage" screenOptions={{headerShown: false}}>
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Alert" component={Alert} />
        </Stack.Navigator>
        {/* <AdMobBanner bannerSize="banner"/> */}
      </NavigationContainer>
  );
}

export default Routes;