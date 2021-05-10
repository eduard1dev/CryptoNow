import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'

import HeaderSecundary from '../../components/HeaderSecundary'
import HeaderSticky from '../../components/HeaderSticky'
import CryptoContainer from '../../components/CryptoContainer'


import {
    Container,
} from './styles'

import { FavCryptosContext } from '../../contexts/FavCryptos'

import mocks from '../../mocks/data'

export default function MyCryptos(){
    const data  = mocks.data

    const { favCryptos, handleAddFavCrypto } = useContext(FavCryptosContext)

    function renderItem({item, index}){
        return (
            data.map((element) => {
                    if (element.cmc_rank == item){
                        return (
                            <View style={{paddingBottom: 20}}>
                                <CryptoContainer 
                                    key={index} 
                                    name={element.name} 
                                    price={element.quote.USD.price.toFixed(2)} 
                                    symbol={element.symbol} 
                                    mtc={element.quote.USD.market_cap.toFixed(0)}
                                    percent={element.quote.USD.percent_change_24h}
                                    id={element.cmc_rank}
                                />
                            </View>
                            
                        )
                    }
                }  
            )
        )
    }       

    return (
        <Container>
            <HeaderSecundary/>
            <HeaderSticky title='YOUR FAVORITED CRYPTOS'/>
            <View style={{ flex: 1 }}>
                <FlatList
                    horizontal={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-around',
                    }}
                    contentContainerStyle={{
                        paddingTop: 20,
                    }}
                    numColumns={2}                    
                    showsVerticalScrollIndicator={false}
                    data={favCryptos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </Container>
    )
}