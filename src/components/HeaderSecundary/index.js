import React from 'react'
import { View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import colors from '../../constants/colors'


import {
    Container,
    Title,
    TitleYellow,
} from './styles'


export default function HeaderSecundary(){
    return(
        <Container>
            <Title>
                My 
            </Title>
            <TitleYellow>
                Cryptos
            </TitleYellow>
        </Container>
    )
}