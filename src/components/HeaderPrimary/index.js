import React, { useEffect, useRef } from 'react'
import { View, Animated } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import colors from '../../constants/colors'


import {
    Container,
    Title,
    TitleYellow,
} from './styles'
import { Easing } from 'react-native-reanimated'




export default function HeaderPrimary(){

    const sizeIconBitcoin = useRef(new Animated.Value(0)).current

    const handleIconAnimation = () => {
        Animated.parallel([
            Animated.spring(sizeIconBitcoin,{
                toValue: 1,
                delay: 1000,
                velocity: 4,
                useNativeDriver: true,
            }),
        ]).start()
    }

    useEffect(() => {
        handleIconAnimation()
    }, [])



    return(
        <Container>
            <TitleYellow>
                Crypto
            </TitleYellow>
            <Title>
                Now
            </Title>
            <Animated.View
                style={{
                    position: 'absolute', 
                    right:'5%', 
                    bottom: 10,
                    transform: [
                        { translateX: sizeIconBitcoin.interpolate(
                            {
                                inputRange: [0, 1],
                                outputRange: [65, 0]
                            }
                        )},
                        { rotate: sizeIconBitcoin.interpolate(
                            {
                                inputRange: [0, 1],
                                outputRange: ['360deg', '0deg']
                            }
                        )},
                    ],
                }}
            >
                <FontAwesome5 name='bitcoin' color={colors.yellow} size={42}/>
            </Animated.View>
        </Container>
    )
}