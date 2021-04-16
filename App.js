import React from 'react';

import Home from './src/pages/Home'

import RankingProvider from './src/contexts/Ranking'

export default function App() {
  return (
    <>
      <RankingProvider>
        <Home/>
      </RankingProvider>
    </>
  );
}