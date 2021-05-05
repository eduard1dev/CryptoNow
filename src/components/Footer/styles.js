import styled from 'styled-components/native'
import colors from '../../constants/colors'

export const Container = styled.View`
    height: 50px;
    background-color: ${colors.gray1};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Input = styled.TextInput`
    height: 36px;
    width: ${ ({ isOpen }) => isOpen ? '70%' : '78%'};
    background-color: ${colors.white};
    align-items: flex-end;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 15px;
    font-size: 16px;
    color: ${colors.gray2};
`
export const IconContainer = styled.View`
    background-color: ${colors.white};
    height: 36px;
    width: 37px;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`
export const CancelText = styled.Text`
    color: ${colors.yellow};
    padding-left: 10px;
    font-family: 'RobotoM';
    font-size: 15px;
    text-align: center;
`