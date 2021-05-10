import React, { useState, useEffect, useContext } from 'react'
import {
    FlatList, 
    StatusBar, 
    ActivityIndicator,
    View,
} from 'react-native'

import data from '../../mocks/data'

import Footer from '../../components/Footer'
import CryptoContainer from '../../components/CryptoContainer'
import HeaderPrimary from '../../components/HeaderPrimary'
import HeaderSticky from '../../components/HeaderSticky'

// contexto cryptos favoritadas
import { FavCryptosContext } from '../../contexts/FavCryptos'

import {
    Container,
    CryptoList,
} from './styles'

import colors from '../../constants/colors'


export default function Home(){
    const [dataCrypto, setCrypto] = useState()
    const [filteredData, setFiltered] = useState()

    const [search, setSearch] = useState('')

    const { favCryptos } = useContext(FavCryptosContext)

    const [loadingMore, setLoadingMore] = useState(false)
    const [loadCrypto, setLoadCrypto] = useState(10)

    function getData(){
        setCrypto(data.data)  
        setFiltered(data.data)   
    }

    useEffect(() => getData(), [])


    const items = [
        {
            type: 'header',
        },
        {
            type: 'sticky',
        },
        {
            type: 'list',
        },
    ]

    const renderItem = ({item}) => {
        switch (item.type){
            case 'list':
                if (filteredData){
                    return (
                            <CryptoList>
                                {filteredData.slice(0, loadCrypto).map((element, index) => (
                                    <View style={{width: '46%', alignItems: 'center', paddingTop: 20}} key={index}>
                                        <CryptoContainer 
                                            name={element.name} 
                                            price={element.quote.USD.price.toFixed(2)} 
                                            symbol={element.symbol} 
                                            mtc={element.quote.USD.market_cap.toFixed(0)}
                                            percent={element.quote.USD.percent_change_24h}
                                            id={element.cmc_rank}
                                        />
                                    </View>
                                ))}
                            </CryptoList>
                        
                    )
                }else{
                    break
                }
            case 'header':
                return (
                    <HeaderPrimary/>
                )
            case 'sticky':
                return(
                    <>
                        <HeaderSticky title='CRYPTO CURRENCY NOW'/>
                    </>
                )
            default: null     
        }
    }

    // função de pesquisa de crypto
    function filterData(text){
        if (text){
            const newData = dataCrypto.filter((element) => {
                const itemData = element.name ? element.name.toUpperCase() : ''
                return itemData.indexOf(text.toUpperCase()) > -1
            })
            setFiltered(newData)
            setSearch(text)
        }else{
            setFiltered(dataCrypto)
            setSearch(text)
            setLoadCrypto(10)
        }
    }

    function handleFetchMore(distance){
        if (distance < 1) return
        setLoadingMore(true)
        setLoadCrypto(oldstate => oldstate + 10)
    }

    return(
        <Container>
            <StatusBar hidden={false} backgroundColor='#c4c4c4' barStyle='dark-content'/>
            <View style={{flex: 1}}>
                <FlatList
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={({distanceFromEnd}) => handleFetchMore(distanceFromEnd)}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    loadingMore
                    ?
                    <ActivityIndicator style={{backgroundColor: colors.primary}} size='large' color={colors.gray2}/>
                    :
                    null
                }
            />
            </View>
            {console.log(loadingMore)}
            <Footer filter={filterData} search={search}/>
        </Container>
    )
}