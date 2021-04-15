import styled from 'styled-components/native'
import colors from '../../constants/colors'

export const Container = styled.View`
    flex-direction: row;
    height: 25px;
    background-color: ${colors.gray1};
    align-items: center;
    padding-left: 5%;
    elevation: 5;
`
export const Title = styled.Text`
    font-size: 14px;
    color: ${colors.gray2};
    text-align: center;
    font-family: 'Righteous';
`