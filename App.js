import React from 'react';
import { useFonts } from 'expo-font'

import Home from './src/pages/Home'

import RankingProvider from './src/contexts/Ranking'

export default function App() {
  const [fontLoaded] = useFonts({
    Righteous: require('./assets/fonts/Righteous-Regular.ttf'),
    RobotoL: require('./assets/fonts/Roboto-Light.ttf'),
    RobotoM: require('./assets/fonts/Roboto-Medium.ttf'),
  })

  if (!fontLoaded){
    return null
  }

  return (
    <>
      <RankingProvider>
        <Home/>
      </RankingProvider>
    </>
  );
}