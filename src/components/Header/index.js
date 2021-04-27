import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { Righteous_400Regular, useFonts } from '@expo-google-fonts/righteous'

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
            <View style={{position: 'absolute', right:'5%', bottom: 10}}>
                <FontAwesome5 name='bitcoin' color={colors.yellow} size={45}/>
            </View>
        </Container>
    )
}