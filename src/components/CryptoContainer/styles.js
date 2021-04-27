import styled from 'styled-components/native'

import colors from '../../constants/colors'

export const Container = styled.View`
    height: 190px;
    width: 160px;
    background-color: ${colors.white};
    elevation: 10;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
`
export const RankNumber = styled.View`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: ${colors.gray1};
    position: absolute;
    left: -5px;
    top: -5px;
    align-items: center;
    justify-content: center;
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
    font-family: 'RobotoL';
`
export const Text1 = styled.Text`
    font-size: 18px;
    font-family: 'Roboto';
    margin-bottom: -2px;
`
export const Text2 = styled.Text`
    font-size: 12px;
    font-family: 'RobotoL';
`
export const PercentContainer = styled.View`
    background-color: ${props => props.percent > 0 ? colors.green : colors.red};
    height: 30px;
    width: 65px;
    margin-top: 12px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`
export const PercentText = styled.Text`
    font-size: 16px;
    font-family: 'Roboto';
    color: ${colors.white};
`
