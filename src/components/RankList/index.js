import React, { useRef, useContext} from 'react'
import { Pressable, Animated} from 'react-native'
import { RankingContext } from '../../contexts/Ranking'

import colors from '../../constants/colors'
import { Entypo } from '@expo/vector-icons'

import { 
    Container,
    ContainerRank, 
    Text1,
    Text2,
} from './styles'

export default function RankList(){

    const AnimX = useRef(new Animated.Value(-100)).current
    const AnimS = useRef(new Animated.Value(0.3)).current

    const {rank, setRank} = useContext(RankingContext)

    function open(){
        Animated.timing(AnimX, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
        Animated.timing(AnimS, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    function close(value){
        setRank(value)
        Animated.timing(AnimX, {
            toValue: -100,
            duration: 500,
            useNativeDriver: true,
        }).start()
        Animated.timing(AnimS, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    return(
    <Container>
        <Animated.View 
            style={{
                flexDirection: 'row',
                width: 160,
                height: 25,
                backgroundColor: colors.gray2,
                position: 'absolute',
                left: '5%',
                borderRadius: 15,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                marginLeft: 70,
                overflow: 'hidden',
                alignItems: 'center',
                transform: [
                    {translateX: AnimX},
                    {scaleX: AnimS}
                ]
            }}
            >
            <Pressable onPress={() => close(100)} style={{marginLeft: 30}}>
                <Text2>100</Text2>
            </Pressable>
            <Pressable onPress={() => close(50)}>
                <Text2>50</Text2>
            </Pressable>
            <Pressable onPress={() => close(25)}>
                <Text2>25</Text2>
            </Pressable>
            <Pressable onPress={() => close(10)}>
                <Text2>10</Text2>
            </Pressable>
        </Animated.View>
        <ContainerRank onPress={() => open()}>
            <Entypo name='list' size={18} color={colors.gray2}/>
            <Text1>TOP {rank}</Text1>
        </ContainerRank>  
    </Container>
    )
}
