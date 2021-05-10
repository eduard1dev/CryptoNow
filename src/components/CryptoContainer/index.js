import React, { useState, useRef, useContext, useEffect } from 'react'
import { View, Animated, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

import {
    Container,
    RankNumber,
    Name,
    Price,
    Text1,
    Text2,
    PercentContainer,
    PercentText,
} from './styles'

import colors from '../../constants/colors'

import { FavCryptosContext } from '../../contexts/FavCryptos'


export default function CryptoContainer(props){
    const { favCryptos, handleAddFavCrypto, handleRemoveFavCrypto } = useContext(FavCryptosContext)

    const favValueAnimation = useRef(new Animated.Value(0)).current

    const handleFavAnimation = () => {
        Animated.sequence([
            Animated.timing(favValueAnimation,{
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(favValueAnimation,{
                toValue: 0,
                delay: 2500,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start()
    }

    // o state inicial vai verificar se o id está favoritado em favCryptos e retornar um boolean
    const [favIcon, setFavIcon] = useState(favCryptos.includes(props.id))

    useEffect(() => setFavIcon(favCryptos.includes(props.id)), [favCryptos])

    const handleFavCrypto = (idFavCrypto) => {
        if (favIcon){
            handleRemoveFavCrypto(idFavCrypto)
        }else{
            handleAddFavCrypto(idFavCrypto)
        }
        setFavIcon(!favIcon)

    }

    // função para tratar a string do valor de marketcap da crypto.
    function showMtc(mtc){
        if (mtc.length > 12){
            let string = mtc.slice(0, -9)
            return ('$' + string.slice(0, -3) + ',' + string.slice(-3) + 'T')
        }else if (mtc.length > 9){
            let string = mtc.slice(0, -6)
            return ('$' + string.slice(0, -3) + ',' + string.slice(-3) + 'B')
        }else if (mtc.length > 6){
            let string = mtc.slice(0, -3)
            return ('$' + string.slice(0, -3) + ',' + string.slice(-3) + 'M')
        }else{
            return ('$' + mtc.slice(0, -3) + ',' + mtc.slice(-3) + 'M')
        } 
    }

    return(
        <>
            {console.log(favCryptos)}
            <Container
                activeOpacity={0.9}
                onPress={handleFavAnimation}
            >
                <RankNumber>
                    <Text2 numberOfLines={1}>
                        {props.id}
                    </Text2>
                </RankNumber>
                <Animated.View 
                 style={{ 
                    position: 'absolute',
                    right: 5,
                    top: 5,
                    opacity: favValueAnimation,
                }}
                >
                    <TouchableOpacity onPress={() => handleFavCrypto(props.id)} activeOpacity={0.9}>
                    {
                        favIcon ?
                        <FontAwesome name='star' size={18} color={colors.yellow} /> :
                        <FontAwesome name='star-o' size={18} color={colors.gray2} />
                    }
                    </TouchableOpacity>
                </Animated.View>
                <Name numberOfLines={1}>{props.name.toUpperCase()}</Name>
                <Price>${props.price}</Price>
                <Text2>PRICE</Text2>
                <View style={{flexDirection: 'row', alignItems:'flex-end'}}><Text1>{props.symbol}</Text1><Text2> / USD</Text2></View>
                <View style={{flexDirection: 'row', alignItems:'flex-end', paddingTop: 5}}><Text2>MTC </Text2><Text1>{showMtc(props.mtc.toString())}</Text1></View>
                <PercentContainer percent={props.percent}>
                    <PercentText>{props.percent.toFixed(2)}%</PercentText>
                </PercentContainer>
            </Container>    
        </>
    )
}