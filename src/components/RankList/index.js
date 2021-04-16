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

    const Anim = useRef(new Animated.Value(0)).current

    const {rank, setRank} = useContext(RankingContext)

    function open(){
        Animated.timing(Anim, {
            toValue: 160,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }

// Passei como função assincrona pois para renderizar muitos componentes a app pode travar, travando assim a animação. 
// Dessa forma a função setRank() só será executada após a animação.
    function close(value){
        Animated.timing(Anim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start()
        setTimeout(() => {
            setRank(value)
        }, 500);
    }

    return(
    <Container>
        <Animated.View 
            style={{
                flexDirection: 'row',
                width: Anim,
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
