import React, { useState } from 'react'
import { TouchableOpacity, Keyboard } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import {
    Container,
    Input,
    IconContainer,
    CancelText,
} from './styles'



export default function Footer(props){
    const [isOpen, setOpen] = useState(false)

    return(
        <Container>
            <Input 
                onFocus={() => setOpen(true)} 
                onBlur={() => setOpen(false)}
                placeholder='SEARCH CRYPTO' 
                value={props.search} 
                onChangeText={(text) => {props.filter(text)}}
                isOpen={isOpen}
            />
            <IconContainer>
                <AntDesign name='search1' size={22}/>
            </IconContainer>
            {
                isOpen &&
                <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                    <CancelText>Cancel</CancelText>
                </TouchableOpacity>
            }
        </Container>
    )
}