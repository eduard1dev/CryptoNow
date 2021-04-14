import styled from 'styled-components/native'

import colors from '../../constants/colors'

export const Container = styled.View`
    height: 145px;
    width: 135px;
    background-color: ${colors.white};
    elevation: 10;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`
export const Name = styled.Text`
    font-size: 18px;
`
export const Price = styled.Text`
    font-size: 24px;
    margin-top: -4px;
    margin-bottom: -4px;
`
export const Text1 = styled.Text`
    font-size: 18px;
`
export const Text2 = styled.Text`
    font-size: 12px;
`
