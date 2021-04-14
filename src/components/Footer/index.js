import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import {
    Container,
    Input,
    IconContainer,
} from './styles'



export default function Footer(props){
    return(
        <Container>
            <Input placeholder='SEARCH CRYPTO' value={props.search} onChangeText={(text) => {props.filter(text)}}/>
            <IconContainer>
                <AntDesign name='search1' size={22}/>
            </IconContainer>
        </Container>
    )
}