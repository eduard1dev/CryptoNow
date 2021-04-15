import React, { useState, useEffect } from 'react'
import {FlatList, StatusBar} from 'react-native'
import { useFonts } from 'expo-font'

import data from '../../mocks/data'

import Footer from '../../components/Footer'
import CryptoContainer from '../../components/CryptoContainer'
import Header from '../../components/Header'
import HeaderSticky from '../../components/HeaderSticky'

import {
    Container,
    CryptoList,
} from './styles'




export default function Home(){



    const [dataCrypto, setCrypto] = useState()
    const [filteredData, setFiltered] = useState()

    const [search, setSearch] = useState('')

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
        }
    ]


    const renderItem = ({item}) => {
        switch (item.type){
            case 'list':
                if (filteredData){
                    return (
                            <CryptoList>
                                {filteredData.map((element, index) => (
                                    <CryptoContainer key={index} name={element.name} price={element.quote.USD.price.toFixed(2)} symbol={element.symbol} mtc={element.quote.USD.market_cap.toFixed(0)}/>
                                ))}    
                            </CryptoList>
                    )
                }else{
                    break
                }
            case 'header':
                return (
                    <Header/>
                )
            case 'sticky':
                return(
                    <HeaderSticky/>
                )
            default: null     
        }
    }

    // função de pesquisa de crypto
    function filterData(text){
        if (text){
            const newData = filteredData.filter((element) => {
                const itemData = element.name ? element.name.toUpperCase() : ''
                return itemData.indexOf(text.toUpperCase()) > -1
            })
            setFiltered(newData)
            setSearch(text)
        }else{
            setFiltered(dataCrypto)
            setSearch(text)
        }
    }
    const [fontLoaded] = useFonts({
        Righteous: require('../../../assets/fonts/Righteous-Regular.ttf'),
        RobotoL: require('../../../assets/fonts/Roboto-Light.ttf'),
        Roboto: require('../../../assets/fonts/Roboto-Medium.ttf'),
    })

    if (!fontLoaded){
        return null
    }

    return(
        <Container>
            <StatusBar hidden={false} backgroundColor='#c4c4c4' barStyle='dark-content'/>
            <FlatList
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <Footer filter={filterData} search={search}>
            </Footer>
        </Container>
    )
}