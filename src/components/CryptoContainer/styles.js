import styled from 'styled-components/native'

import colors from '../../constants/colors'

export const Container = styled.View`
    height: 190px;
    width: 145px;
    background-color: ${colors.white};
    elevation: 10;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    padding-left: 10px;
`
export const Name = styled.Text`
    font-size: 18px;
    font-family: 'RobotoM';
    padding-bottom: 8px;

`
export const Price = styled.Text`
    font-size: 24px;
    margin-top: -4px;
    margin-bottom: -4px;
    font-family: 'RobotoL'
`
export const Text1 = styled.Text`
    font-size: 18px;
    font-family: 'Roboto';
    margin-bottom: -2px;
`
export const Text2 = styled.Text`
    font-size: 12px;
    font-family: 'RobotoL'
`
