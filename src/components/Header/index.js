import React from 'react'
import { View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import colors from '../../constants/colors'


import {
    Container,
    Title,
    TitleYellow,
} from './styles'




export default function Header(){
    return(
        <Container>
            <TitleYellow>
                Crypto
            </TitleYellow>
            <Title>
                Now
            </Title>
            <View style={{position: 'absolute', right:'5%', bottom: 10 }}>
                <FontAwesome5 name='bitcoin' color={colors.yellow} size={42}/>
            </View>
        </Container>
    )
}