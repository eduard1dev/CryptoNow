import React from 'react'
import {View} from 'react-native'

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


export default function CryptoContainer(props){

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
        <View style={{width: '46%', alignItems: 'center', paddingTop: 20}}>
            <Container>
                <RankNumber>
                    <Text2 numberOfLines={1}>
                        {props.id}
                    </Text2>
                </RankNumber>
                <Name numberOfLines={1}>{props.name.toUpperCase()}</Name>
                <Price>${props.price}</Price>
                <Text2>PRICE</Text2>
                <View style={{flexDirection: 'row', alignItems:'flex-end'}}><Text1>{props.symbol}</Text1><Text2> / USD</Text2></View>
                <View style={{flexDirection: 'row', alignItems:'flex-end', paddingTop: 5}}><Text2>MTC </Text2><Text1>{showMtc(props.mtc.toString())}</Text1></View>
                <PercentContainer percent={props.percent}>
                    <PercentText>{props.percent.toFixed(2)}%</PercentText>
                </PercentContainer>
            </Container>    
        </View>
    )
}