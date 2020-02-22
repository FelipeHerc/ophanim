import React, { useEffect, useState } from 'react';
import Routes from './src/routes';
import * as Font from 'expo-font';

export default function App() {

  const [isFontReady, setFontReady] = useState(false)
  console.log(isFontReady);
  useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        'hyundaiLight': require('./assets/fonts/HyundaiSansHeadOffice-Light.ttf'),
        'hyundaiBold': require('./assets/fonts/HyundaiSansHeadOffice-Bold.ttf'),
        'ubuntuRegular': require('./assets/fonts/Ubuntu-Regular.ttf'),
      });
    }
    loadFont().then(() => {
      setFontReady(true)
    });
  }, []);

  return (
    (isFontReady && <Routes/>)
  );
}

