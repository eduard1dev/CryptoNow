import React, { useRef }from 'react'
import {
    Animated,
    TouchableWithoutFeedback,
} from 'react-native'

import { Entypo } from '@expo/vector-icons'

import {
    Label
} from './styles'

import colors from '../../constants/colors'

export default function TabBarIcon({onPress, name, accessibilityState, label}){
    const focused = accessibilityState.selected
    const color = focused ? colors.yellow : colors.gray2

    const sizeIcon = useRef(new Animated.Value(1)).current

    const handlePress = () => {
        onPress()
        Animated.sequence([
            Animated.spring(sizeIcon, {
                toValue: 1.15,
                speed: 100,
                useNativeDriver: true,
            }),
            Animated.spring(sizeIcon, {
                toValue: 1,
                speed: 8,
                useNativeDriver: true,
            })
        ]).start()
    }
    

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{
                        scale: sizeIcon
                    }]
                }}
            >
                <Entypo size={30} name={name} color={color}/>
                <Label focused={focused}>
                    {label}
                </Label>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}