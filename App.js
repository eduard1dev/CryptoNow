import React from 'react';
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

import FavCryptosProvider from './src/contexts/FavCryptos'


export default function App() {
  const [fontLoaded] = useFonts({
    Righteous: require('./assets/fonts/Righteous-Regular.ttf'),
    RobotoL: require('./assets/fonts/Roboto-Light.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoM: require('./assets/fonts/Roboto-Medium.ttf'),
  })

  if (!fontLoaded){
    return null
  }

  return (
    <NavigationContainer>
      <FavCryptosProvider>
        <Routes/>
      </FavCryptosProvider>
    </NavigationContainer>
  );
}