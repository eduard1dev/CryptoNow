import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import { View, Text} from 'react-native'

import {
    Container,
    Title,
} from './styles'


export default function HeaderSticky(props){
    return (
        <Container>
            <Title>
                {props.title}
            </Title>
        </Container>
    )
}